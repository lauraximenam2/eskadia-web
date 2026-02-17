# 🤖 Workflows de n8n para Processia Chat

Tienes **2 versiones** del workflow. Elige la que mejor se adapte a tu setup de n8n.

---

## 📦 ¿Qué Workflow Usar?

### ✅ Opción 1: `n8n-workflow-simple-http.json` (RECOMENDADO)

**Usa este si:**
- ✅ Tienes n8n básico (self-hosted o cloud)
- ✅ No tienes instalado el plugin de LangChain
- ✅ Quieres algo simple y directo
- ✅ Usas DeepSeek u otra API compatible con OpenAI

**Ventajas:**
- 🚀 Funciona out-of-the-box
- 💡 Solo usa nodos HTTP Request (nativos)
- 🔧 Fácil de debuggear
- ⚡ Más rápido de configurar

### 🔬 Opción 2: `n8n-workflow-processia-chat.json` (AVANZADO)

**Usa este si:**
- ✅ Tienes el plugin `@n8n/n8n-nodes-langchain` instalado
- ✅ Quieres usar características avanzadas de LangChain
- ✅ Planeas agregar memoria conversacional o RAG
- ✅ Tienes experiencia con n8n y LangChain

**Ventajas:**
- 🧠 Mejor manejo de contexto conversacional
- 🔗 Integración con LangChain
- 📚 Fácil agregar vectorstores y embeddings

---

## 🚀 Quick Start (3 pasos)

### 1️⃣ Importar Workflow

```bash
# En tu navegador
1. Ve a tu n8n: https://n8n.grupologali.com
2. Click en "Add workflow" → "Import from File"
3. Selecciona: n8n-workflow-simple-http.json
```

### 2️⃣ Configurar DeepSeek

En n8n, crea credenciales:

```
Credentials → Add → HTTP Header Auth

Name: DeepSeek API Key
Header Name: Authorization
Value: Bearer sk-TU_API_KEY_AQUI
```

**Obtén tu API Key:** [platform.deepseek.com](https://platform.deepseek.com)

### 3️⃣ Actualizar URLs

**En el workflow:**
- Nodo "Load Knowledge": Cambia la URL a donde esté tu `processia-content.json`

**En tu proyecto Next.js:**

```bash
# Edita .env.local
N8N_WEBHOOK_URL=https://n8n.grupologali.com/webhook/processia-chat

# Reinicia el servidor
npm run dev
```

---

## 📍 ¿Dónde Hostear processia-content.json?

Tienes 3 opciones:

### Opción A: GitHub (Gratis, Recomendado)

```bash
# 1. Sube a tu repo
git add public/data/processia-content.json
git commit -m "Add chat knowledge base"
git push

# 2. Obtén URL raw
https://raw.githubusercontent.com/TU_USER/TU_REPO/main/public/data/processia-content.json

# 3. Usa esa URL en el nodo "Load Knowledge"
```

### Opción B: Tu Servidor Next.js

```bash
# URL pública
https://processia.ai/data/processia-content.json

# Nota: Asegúrate de que la carpeta public/ sea accesible
```

### Opción C: n8n Local (Solo Self-hosted)

```javascript
// Pega el JSON directamente en el nodo "Prepare Prompt"
const knowledgeBase = {
  "crm": [...],
  "services": [...],
  // ... resto del JSON
};
```

---

## 🧪 Probar el Chat

### Desde tu web:

```bash
npm run dev
# Abre http://localhost:3002
# Click en el botón del chat
# Pregunta: "¿Qué es Processia?"
```

### Con curl:

```bash
curl -X POST https://n8n.grupologali.com/webhook/processia-chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Cuánto cuesta el plan Pro?",
    "sessionId": "test-123"
  }'
```

**Respuesta esperada:**

```json
{
  "response": "El plan Pro de Processia tiene un rango de precios...",
  "sources": [
    {
      "title": "💰 Planes y Precios",
      "url": "https://processia.ai/pricing"
    }
  ],
  "sessionId": "test-123",
  "timestamp": "2026-02-17T19:00:00.000Z"
}
```

---

## 🔧 Configuración Avanzada de DeepSeek

### En el nodo "Call DeepSeek API":

```json
{
  "model": "deepseek-chat",        // Modelo a usar
  "temperature": 0.7,               // Creatividad (0-1)
  "max_tokens": 500,                // Longitud máxima
  "top_p": 0.9,                     // Diversidad (opcional)
  "frequency_penalty": 0.3,         // Evita repetición (opcional)
  "presence_penalty": 0.2           // Fomenta nuevos temas (opcional)
}
```

### Ajustar según necesites:

- **Respuestas más precisas**: `temperature: 0.3`
- **Respuestas más creativas**: `temperature: 0.9`
- **Respuestas más largas**: `max_tokens: 800`
- **Respuestas más cortas**: `max_tokens: 300`

---

## 📊 Monitoreo

### Ver ejecuciones en n8n:

```bash
1. En n8n: Sidebar → Executions
2. Filtrar por: "Processia AI Chat"
3. Ver detalles de cada ejecución
```

### Datos que puedes monitorear:

- ✅ Mensajes recibidos
- ✅ Respuestas generadas
- ✅ Tokens consumidos
- ✅ Tiempo de respuesta
- ✅ Errores y fallos

---

## 💰 Costos de DeepSeek

### Pricing actual:

```
Input:  $0.14 / 1M tokens
Output: $0.28 / 1M tokens

Promedio por conversación:
~1,000 tokens = $0.0003 USD

1,000 mensajes = ~$0.30 USD 🤯
```

**Es 200x más barato que GPT-4.**

### Comparación:

| Modelo | Costo por 1K msgs | Costo por 10K msgs |
|--------|-------------------|--------------------|
| DeepSeek | $0.30 | $3.00 |
| GPT-3.5 | $1.00 | $10.00 |
| GPT-4 | $50.00 | $500.00 |

---

## 🐛 Troubleshooting Rápido

### "Webhook waiting..."
✅ **Solución:** Activa el workflow (toggle arriba a la derecha)

### "Authorization failed"
✅ **Solución:** Verifica tu API Key de DeepSeek en las credenciales

### "Cannot read JSON"
✅ **Solución:** Verifica que la URL del knowledge base sea accesible públicamente

### "Timeout"
✅ **Solución:** Aumenta el timeout en opciones del nodo HTTP Request a 30000ms

### El bot responde en inglés
✅ **Solución:** En el nodo "Prepare Prompt", enfatiza "Responde SIEMPRE en español"

---

## 📚 Documentación Completa

Para instrucciones detalladas, ve a: **`N8N_SETUP_GUIDE.md`**

---

## 🎉 ¡Listo!

Tu chat inteligente está configurado. Ahora puedes:

✅ Responder preguntas 24/7
✅ Generar leads mientras duermes
✅ Escalar soporte sin contratar
✅ Analizar qué preguntan tus usuarios

**Siguiente paso:** Monitorea las conversaciones y ajusta el prompt según las dudas más comunes.

---

## 📞 ¿Necesitas Ayuda?

1. **Revisa logs de n8n:** Executions → Ver detalles
2. **Revisa consola del navegador:** F12 en tu chat
3. **Revisa logs de Next.js:** Terminal donde corre `npm run dev`

---

**Hecho con 💜 por Processia AI**
