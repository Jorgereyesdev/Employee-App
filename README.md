# 📋 Employees App

Aplicación desarrollada en Angular para gestionar empleados. Incluye un servidor simulado con json-server para pruebas de backend.

# 🚀 Requisitos previos
Antes de iniciar el proyecto asegurate de tener instalado lo siguiente:

- Node.js (versión recomendada: ≥ 18.x)
- Angular CLI:

## Comandos de instalación de Angular
- npm install -g @angular/cli

# Instalación
Clona el repositorio y ejecuta:
- npm install

# Inicia el Backend simulado
Para ejecutar el json-server ejecuta:
- npm run json-server
Esto levantará un servidor en http://localhost:3000 usando el archivo db.json como base de datos.

# Inicia La Aplicación Angular
Para iniciar la aplicación Angular en modo desarrollo:
- npm start

# Estructura Del Proyecto
employees-app/
├── src/
│   └── app/
│       ├── core/
│       │   ├── models/
│       │   └── services/
│       ├── features/
│       │   ├── pages/
│       │   └── components/
│       └── shared/
│           └── pipe/
├── db.json
├── package.json
└── README.md
