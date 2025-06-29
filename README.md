# Paulet Assistant Frontend

Este es el frontend de **Paulet Assistant**, una aplicación de chatbot construida con [React](https://react.dev/) y [Vite](https://vitejs.dev/).

## Características

- Interfaz moderna y responsiva para chatear con el asistente Paulet.
- Comunicación con backend vía API REST (`/chat`).
- Manejo de inicio de sesión.
- Componentes reutilizables y estilos personalizados.
- ESLint configurado para mantener la calidad del código.

## Estructura del proyecto

```
paulet-assistant/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Chat.jsx
│   │   ├── ChatBot.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── ChatInput.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessages.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/paulet-assistant-frontend.git
   cd paulet-assistant-frontend/paulet-assistant
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la build de producción.
- `npm run lint` — Ejecuta ESLint para revisar el código.

## Configuración de ESLint

El proyecto incluye una configuración de ESLint para mantener buenas prácticas y calidad en el código. Puedes modificar las reglas en [`eslint.config.js`](eslint.config.js).

## Notas

- El frontend espera que el backend esté disponible en `http://127.0.0.1:8000/chat`.
- Asegúrate de tener el backend corriendo para que el chat funcione correctamente.

## Licencia

Aún no se ha configurado la licencia.

---

Hecho con ❤️ usando React y Vite.