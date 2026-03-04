'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; url: string }>;
  timestamp: number;
}

interface ChatState {
  messages: Message[];
  sessionId: string | null;
}

// Constants
const MAX_MESSAGE_LENGTH = 500;
const MAX_STORED_MESSAGES = 50;
const STORAGE_KEY = 'eskadia-chat-state';
const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: '¡Hola! 👋 Soy el asistente de Eskadia.ai. Pregúntame sobre nuestro CRM inteligente, servicios de automatización o cursos. ¿En qué puedo ayudarte? 🚀',
  timestamp: Date.now(),
};

export function ChatWidget() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Load chat state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const state: ChatState = JSON.parse(stored);
        if (state.messages && Array.isArray(state.messages) && state.messages.length > 0) {
          setMessages(state.messages.slice(-MAX_STORED_MESSAGES));
        }
        if (state.sessionId) {
          setSessionId(state.sessionId);
        }
      }
    } catch (error) {
      console.error('Error loading chat state:', error);
    }
  }, []);

  // Save chat state to localStorage whenever it changes
  useEffect(() => {
    if (messages.length > 0 || sessionId) {
      try {
        const state: ChatState = {
          messages: messages.slice(-MAX_STORED_MESSAGES),
          sessionId,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error('Error saving chat state:', error);
      }
    }
  }, [messages, sessionId]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle chat toggle
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle message send
  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    if (trimmedInput.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    // Create user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedInput,
      timestamp: Date.now(),
    };

    // Update UI immediately
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedInput,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      // Update session ID if new
      if (data.sessionId && data.sessionId !== sessionId) {
        setSessionId(data.sessionId);
      }

      // Create assistant message
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.response || 'Lo siento, no pude procesar tu mensaje.',
        sources: data.sources || [],
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Chat error:', error);

      // Error message
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: error instanceof Error
          ? `Error: ${error.message}. Por favor, intenta de nuevo.`
          : 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Handle Escape key to close chat
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Character count
  const charCount = input.length;
  const isOverLimit = charCount > MAX_MESSAGE_LENGTH;

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-16 h-16 rounded-full',
          'bg-gradient-to-br from-primary via-primary-hover to-secondary',
          'text-white shadow-xl',
          'flex items-center justify-center',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
          'motion-reduce:transition-none',
          'glow hover:glow-lg'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            className={cn(
              'fixed bottom-24 right-6 z-50',
              'w-[400px] h-[600px]',
              'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-10rem)]',
              'bg-card',
              'rounded-2xl shadow-2xl',
              'flex flex-col',
              'overflow-hidden',
              'border border-border'
            )}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-primary via-primary-hover to-secondary px-6 py-4 flex items-center justify-between overflow-hidden">
              {/* Subtle animated background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
              </div>

              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Eskadia AI</h3>
                  <p className="text-white/80 text-xs">Asistente Inteligente</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="relative text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-background px-4 py-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-3 shadow-sm',
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-primary to-primary-hover text-white rounded-tr-sm'
                        : 'bg-card border border-border text-foreground rounded-tl-sm'
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                      {message.content}
                    </p>

                    {/* Sources */}
                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground">
                          Fuentes:
                        </p>
                        {message.sources.map((source, index) => (
                          <a
                            key={index}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              'flex items-center gap-2 text-xs',
                              'text-primary hover:text-primary-hover',
                              'transition-colors duration-200',
                              'focus:outline-none focus:ring-2 focus:ring-primary rounded',
                              'p-1 -ml-1'
                            )}
                          >
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{source.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Escribiendo...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-card border-t border-border px-4 py-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className={cn(
                      'w-full resize-none rounded-xl',
                      'bg-muted',
                      'border border-border',
                      'px-4 py-3 pr-16',
                      'text-sm text-foreground',
                      'placeholder:text-muted-foreground',
                      'focus:outline-none focus:ring-2 focus:ring-primary',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                      'transition-all duration-200',
                      isOverLimit && 'ring-2 ring-destructive'
                    )}
                    rows={1}
                    maxLength={MAX_MESSAGE_LENGTH + 50}
                    aria-label="Mensaje de chat"
                  />
                  <div
                    className={cn(
                      'absolute bottom-2 right-2 text-xs font-medium',
                      isOverLimit ? 'text-destructive' : 'text-muted-foreground'
                    )}
                    aria-live="polite"
                  >
                    {charCount}/{MAX_MESSAGE_LENGTH}
                  </div>
                </div>

                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim() || isOverLimit}
                  className={cn(
                    'flex-shrink-0',
                    'w-12 h-12 rounded-xl',
                    'bg-gradient-to-br from-primary to-primary-hover',
                    'text-white',
                    'hover:from-primary-hover hover:to-primary',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'flex items-center justify-center',
                    'transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card',
                    'shadow-lg hover:shadow-xl',
                    !isLoading && !isOverLimit && input.trim() && 'hover:scale-105'
                  )}
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-2 text-center">
                Presiona <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">Enter</kbd> para enviar, <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">Shift+Enter</kbd> para nueva línea
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
