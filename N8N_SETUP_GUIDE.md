# 🤖 Guía de Configuración del Workflow de n8n para Eskadia Chat

Esta guía te ayudará a configurar el workflow de n8n para que tu chat widget funcione con DeepSeek.

---

## 📋 Prerequisitos

1. **Cuenta de n8n** (self-hosted o n8n.cloud)
2. **API Key de DeepSeek** - Obtén una en [platform.deepseek.com](https://platform.deepseek.com)
3. **Archivo eskadia-content.json** accesible públicamente

---

## 🚀 Paso 1: Importar el Workflow en n8n

1. Abre tu instancia de n8n
2. Ve a **Workflows** → **Add workflow** → **Import from File**
3. Selecciona el archivo `n8n-workflow-eskadia-chat.json`
4. Haz clic en **Import**

---

## 🔑 Paso 2: Configurar Credenciales de DeepSeek

### Opción A: Usar DeepSeek (Recomendado)

1. En n8n, ve a **Credentials** → **Add Credential**
2. Busca y selecciona **OpenAI**
3. Configura:
   ```
   Name: DeepSeek API
   API Key: sk-XXXXXXXXXXXXXXXX (tu API key de DeepSeek)
   Base URL: https://api.deepseek.com
   ```
4. Haz clic en **Save**

### Opción B: Usar OpenAI

Si prefieres usar OpenAI en lugar de DeepSeek:

1. Crea credenciales de OpenAI normalmente
2. En el nodo "DeepSeek Chat", cambia el modelo a `gpt-4` o `gpt-3.5-turbo`
3. Ajusta el `maxTokens` según necesites

---

## 📦 Paso 3: Configurar la Carga del Knowledge Base

Tienes **3 opciones** para cargar el archivo `eskadia-content.json`:

### Opción 1: Subir a GitHub (Recomendado para producción)

1. Sube `public/data/eskadia-content.json` a tu repositorio de GitHub
2. Obtén la URL raw del archivo:
   ```
   https://raw.githubusercontent.com/TU_USUARIO/TU_REPO/main/public/data/eskadia-content.json
   ```
3. En el nodo **"Load Knowledge Base"**, actualiza la URL:
   ```json
   {
     "url": "https://raw.githubusercontent.com/TU_USUARIO/TU_REPO/main/public/data/eskadia-content.json"
   }
   ```

### Opción 2: Usar tu servidor Next.js

1. Asegúrate de que tu servidor Next.js esté corriendo en producción
2. El archivo estará disponible en:
   ```
   https://eskadia.ai/data/eskadia-content.json
   ```
3. Actualiza la URL en el nodo **"Load Knowledge Base"**

### Opción 3: Usar un nodo "Read Binary Files" (Self-hosted)

Si tienes n8n self-hosted y el archivo en el mismo servidor:

1. **Elimina** el nodo "Load Knowledge Base"
2. Agrega un nodo **"Read Binary Files"**
3. Configura la ruta: `/ruta/completa/a/eskadia-content.json`
4. Conecta directamente a "Prepare Context"

---

## 🌐 Paso 4: Configurar el Webhook

1. Abre el nodo **"Webhook"**
2. Verás la URL del webhook generada, algo como:
   ```
   https://n8n.grupologali.com/webhook/eskadia-chat
   ```
3. Copia esta URL

### Actualizar tu aplicación Next.js:

Edita el archivo `.env.local`:

```bash
N8N_WEBHOOK_URL=https://TU_INSTANCIA_N8N.com/webhook/eskadia-chat
```

**IMPORTANTE:** Reinicia tu servidor Next.js después de cambiar el `.env.local`:

```bash
npm run dev
```

---

## 🔧 Paso 5: Activar el Workflow

1. En n8n, asegúrate de que el workflow esté **Activo** (toggle en la esquina superior derecha)
2. Si ves un warning de "Webhook waiting for first execution", es normal

---

## ✅ Paso 6: Probar el Chat

### Prueba Manual en n8n:

1. En el nodo **"Webhook"**, haz clic en **"Listen for Test Event"**
2. Desde tu navegador, abre: `http://localhost:3002`
3. Abre el chat widget y envía un mensaje
4. Deberías ver la ejecución en n8n con los datos

### Prueba con Postman/curl:

```bash
curl -X POST https://TU_INSTANCIA_N8N.com/webhook/eskadia-chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Qué es Eskadia?",
    "sessionId": "test-session-123",
    "timestamp": "2026-02-17T19:00:00.000Z"
  }'
```

Respuesta esperada:

```json
{
  "response": "¡Hola! Eskadia es una plataforma de automatización...",
  "sources": [
    {
      "title": "Eskadia Core - CRM Inteligente",
      "url": "https://eskadia.ai/crm"
    }
  ],
  "sessionId": "test-session-123",
  "timestamp": "2026-02-17T19:00:00.000Z"
}
```

---

## 🎨 Paso 7: Personalizar las Respuestas

### Ajustar el Prompt del Sistema:

Edita el nodo **"Prepare Context"** para cambiar cómo responde el asistente:

```javascript
const context = `
Eres un asistente inteligente de Eskadia.ai.

PERSONALIDAD:
- Profesional pero cercano
- Usa emojis con moderación
- Respuestas concisas (máximo 150 palabras)
- Enfócate en beneficios, no solo características

TONO:
- Startup tech moderna
- Innovador y optimista
- Orientado a resultados

...resto del contexto...
`;
```

### Ajustar Parámetros de DeepSeek:

En el nodo **"DeepSeek Chat"**:

```json
{
  "temperature": 0.7,  // Creatividad (0.0 = conservador, 1.0 = creativo)
  "maxTokens": 500,    // Longitud máxima de respuesta
  "topP": 0.9          // (Opcional) Diversidad de respuestas
}
```

---

## 🐛 Troubleshooting

### Error: "N8N_WEBHOOK_URL environment variable is not set"

**Solución:**
- Verifica que `.env.local` exista en la raíz del proyecto
- Reinicia el servidor Next.js: `npm run dev`

### Error: "Failed to fetch"

**Solución:**
- Verifica que el workflow esté **Activo** en n8n
- Comprueba que la URL del webhook sea correcta
- Verifica que no haya CORS issues (el workflow ya incluye headers CORS)

### Error: "DeepSeek API key invalid"

**Solución:**
- Verifica tu API key en [platform.deepseek.com](https://platform.deepseek.com)
- Asegúrate de que la Base URL sea `https://api.deepseek.com`
- Comprueba que tengas créditos disponibles

### El bot no responde o da respuestas genéricas

**Solución:**
- Verifica que el nodo "Load Knowledge Base" esté cargando correctamente el JSON
- Revisa que la URL del JSON sea accesible públicamente
- Inspecciona la ejecución en n8n para ver si hay errores

### Timeout en las respuestas

**Solución:**
- Aumenta el timeout en el nodo "Load Knowledge Base": `"timeout": 30000`
- Reduce el `maxTokens` en DeepSeek Chat a `300-400`
- Considera cachear el knowledge base en n8n

---

## 📊 Monitoreo y Mejoras

### Ver las ejecuciones:

1. En n8n, ve a **Executions**
2. Filtra por "Eskadia AI Chat Assistant"
3. Revisa las ejecuciones exitosas y fallidas

### Métricas útiles:

- **Tokens usados**: Ve el nodo "Process Response" → `metadata.tokensUsed`
- **Tiempo de respuesta**: Revisa la duración de cada ejecución
- **Fuentes más citadas**: Analiza qué URLs se devuelven más

### Agregar Analytics (Opcional):

Puedes agregar un nodo al final del workflow para guardar métricas en una base de datos o Google Sheets:

1. Agrega un nodo **"Google Sheets"** o **"Postgres"**
2. Guarda: `sessionId`, `message`, `response`, `timestamp`, `tokensUsed`
3. Analiza patrones de uso y preguntas frecuentes

---

## 🚀 Optimizaciones Avanzadas

### 1. Cachear el Knowledge Base

En lugar de cargar el JSON en cada request, puedes cachearlo:

```javascript
// En el nodo "Prepare Context"
const cache = $workflow.staticData.knowledgeBase;

if (!cache || Date.now() - cache.timestamp > 3600000) {
  // Recargar cada hora
  const kb = $('Load Knowledge Base').first().json;
  $workflow.staticData.knowledgeBase = {
    data: kb,
    timestamp: Date.now()
  };
}

const knowledgeBase = $workflow.staticData.knowledgeBase.data;
```

### 2. Agregar Historial de Conversación

Para mantener contexto entre mensajes:

1. Usa una base de datos (Redis, PostgreSQL)
2. Guarda los últimos 5 mensajes por `sessionId`
3. Incluye el historial en el prompt de DeepSeek

### 3. Clasificación de Intenciones

Agrega un nodo antes de DeepSeek para clasificar la intención:

- **Ventas**: Redirige a información de precios y demos
- **Soporte**: Redirige a documentación y FAQs
- **General**: Usa el flujo actual

---

## 💰 Costos Estimados

### DeepSeek (Muy Económico):

- **Modelo**: deepseek-chat
- **Costo**: ~$0.14 por 1M tokens de entrada, ~$0.28 por 1M tokens de salida
- **Promedio por mensaje**: ~$0.0001 (1000 mensajes = $0.10)

### OpenAI (Más Caro):

- **GPT-4**: ~$30 por 1M tokens (1000 mensajes = ~$0.50)
- **GPT-3.5-turbo**: ~$0.50 por 1M tokens (1000 mensajes = ~$0.01)

**Recomendación:** Usa DeepSeek para producción, es 200x más barato que GPT-4.

---

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs en n8n (**Executions** → Ver detalles de error)
2. Verifica la consola del navegador (F12) en tu chat
3. Comprueba los logs de Next.js: `npm run dev`

---

## 🎉 ¡Listo!

Tu chat inteligente de Eskadia está funcionando. Los usuarios ahora pueden:

✅ Preguntar sobre el CRM
✅ Consultar precios y planes
✅ Aprender sobre los servicios
✅ Recibir información sobre cursos
✅ Obtener respuestas instantáneas 24/7

**Siguiente paso:** Monitorea las conversaciones y ajusta el prompt según las preguntas más comunes de tus usuarios.
