# 🐉 Pokémon Management App - Fullstack Project

Este es un aplicativo fullstack robusto diseñado para gestionar Pokémon, permitiendo realizar operaciones CRUD completas, búsqueda dinámica y sincronización con la PokéAPI. El proyecto está dividido en un **BackEnd** (Node.js/Express/Prisma) y un **FrontEnd** (React/Vite/MUI).

---

## 🚀 Características Principales

- **Dashboard Interactivo:** Visualización de Pokémon con paginación y búsqueda en tiempo real.
- **Operaciones CRUD:** Crear, leer, actualizar y eliminar Pokémon.
- **Integración con PokéAPI:** Los datos iniciales pueden ser consultados y almacenados desde una fuente externa confiable.
- **Diseño Responsivo:** Interfaz adaptada para dispositivos móviles y escritorio utilizando Material UI.
- **Persistencia de Datos:** Uso de PostgreSQL con Prisma para una gestión de base de datos eficiente y typesafe.

---

## 🛠️ Tecnologías Utilizadas

### BackEnd
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/) (con PostgreSQL)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Validación:** `express-validator`

### FrontEnd
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI Kit:** [Material UI (MUI)](https://mui.com/)
- **Estado Global:** [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **Cliente HTTP:** [Axios](https://axios-http.com/)
- **Enrutamiento:** [React Router 7](https://reactrouter.com/)

---

## 📋 Requisitos Previos

- **Node.js:** Versión 18 o superior.
- **PostgreSQL:** Instancia de base de datos activa (el init se encuentra dentro de la carpeta database).
- **npm / yarn:** Gestor de paquetes.

---

## ⚙️ Configuración y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

### 2. Configuración del BackEnd
```bash
cd BackEnd
npm install
```
- Crea un archivo `.env` en la carpeta `BackEnd/` con tu cadena de conexión:
  ```env
  DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/finanty_db"
  ```
  ```
- **Script de Inicialización:** Existe un script SQL base en `DataBase/init.sql` para restaurar o inicializar la estructura si es requerido.
- Ejecutar migraciones de Prisma:
  ```bash
  npx prisma migrate dev --name init
  ```
- Generar el cliente de Prisma:
  ```bash
  npx prisma generate
  ```
- Iniciar el servidor:
  ```bash
  npm run dev
  ```
  *(El servidor correrá en http://localhost:3001)*

### 3. Configuración del FrontEnd
```bash
cd ../FrontEnd
npm install
npm run dev
```
  *(La aplicación estará disponible en http://localhost:5173)*

---

## 🔌 Documentación de la API

La API Base es: `http://localhost:3001/api`

| Método | Endpoint | Descripción | Parámetros (Query/Body) |
| :--- | :--- | :--- | :--- |
| **GET** | `/items` | Listar Pokémon (paginado) | `page`, `limit`, `search` |
| **GET** | `/:id` | Obtener detalle de Pokémon | `id` (parámetro de ruta) |
| **POST** | `/item` | Crear nuevo Pokémon | `{ name, image, height, weight, types }` |
| **PUT** | `/item` | Actualizar Pokémon | `{ id, name, image, height, weight, types }` |
| **DELETE** | `/:id` | Eliminar Pokémon | `id` (parámetro de ruta) |


---

## 🐳 Despliegue con Docker

El proyecto está dockerizado. Para ejecutar el proyecto (Frontend, Backend, Base de Datos):

1. Asegúrate de tener **Docker** y **Docker Compose** instalados.
2. Desde la raíz del proyecto, ejecuta:
   ```bash
   docker-compose up --build
   ```
3. Accede a:
   - **Frontend:** http://localhost:5173
   - **Backend API:** http://localhost:3001
   - **Base de Datos:** Puerto 5432 (accesible externamente como `localhost:5432`)

---
© 2026 Brandon - Finanty Technical Project
