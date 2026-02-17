import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 30;

// Rate limiting map (in-memory, simple implementation for development)
// In production, consider using a proper rate limiting service like Upstash or Redis
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Simple rate limiter: max 10 requests per minute per IP
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // Reset in 1 minute
    return true;
  }

  if (limit.count >= 10) {
    return false;
  }

  limit.count++;
  return true;
}

interface ChatRequest {
  message: string;
  sessionId?: string;
}

interface ChatResponse {
  response: string;
  sources?: Array<{ title: string; url: string }>;
  sessionId: string;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Rate limiting (commented out for development, uncomment in production)
    // if (!checkRateLimit(ip)) {
    //   return NextResponse.json(
    //     { error: 'Too many requests. Please try again later.' },
    //     { status: 429 }
    //   );
    // }

    // Parse request body
    const body = await req.json() as ChatRequest;
    const { message, sessionId } = body;

    // Validation
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    if (message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message must be 500 characters or less' },
        { status: 400 }
      );
    }

    // Get webhook URL from environment variable
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Chat service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Generate or use existing session ID
    const finalSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Call n8n webhook
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
        sessionId: finalSessionId,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error('n8n webhook error:', n8nResponse.status, n8nResponse.statusText);

      // Try to parse error response
      let errorMessage = 'Failed to get response from chat service';
      try {
        const errorData = await n8nResponse.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // If parsing fails, use default message
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    // Parse n8n response
    const data = await n8nResponse.json();

    // Construct response
    const response: ChatResponse = {
      response: data.response || data.message || 'Lo siento, no pude procesar tu mensaje. Intenta de nuevo.',
      sources: data.sources || [],
      sessionId: finalSessionId,
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
