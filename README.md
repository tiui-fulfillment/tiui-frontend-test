This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# TODO APP - Funcionamiento
<img src="./public/capturas/todoapp.png" alt="Inicio"/>

## Tecnologias
- REACT
- MongoDB
- Next Js
- Bootstrap 4.6

## API Funciones CRUD
Cree una API con funciones CRUD, si quieres utilizarla, al ejecutar en entorno de desarrollo la ruta es /api/todos para metodo GET y POST, para PUT y DELETE consulta el archivo Api.md en la carpeta /src/app/api/ ahi encontraras la descripcion completa del funcionamiento de la API

## Deploy de TODO APP
La aplicacion funciona con base de datos en MongoDB si no quieres crear la conexion puedes visitar el deploy a produccion en [Vercel](https://tiui-frontend-test-7ae161qq3-voyghas-projects.vercel.app/), en este enlace.

## Base de Datos MongoDB
Esta aplicacion funciona con base de datos de MongoDB, descarga el repositorio y crea un archivo .env en la carpeta raiz de todo-app-next

- Crea el archivo .env dentro crea el parametro de conexion a la base de datos 

#### Ejemplo
MONGODB_URI='mongodb+srv://USUARIO:CLAVE@cluster0production.wna43mw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Production'

### Crea un Cluster con MongoDB Atlas
- Dirigete a [MongoDB](https://www.mongodb.com/products/platform/atlas-database)

<img src="./public/capturas/mongo1.png" alt="mongo1" width="500"/>

- Crea una cuenta

<img src="./public/capturas/mongoregister.png" alt="mongo2" width="500"/>

- Crea un Cluster

<img src="./public/capturas/cluster.png" alt="mongo3" width="500"/>

- Conecta tu Cluster con tu aplicacion

<img src="./public/capturas/connection.jpeg" alt="mongo4" width="500"/>

Ahi obtendras la cadena de coneccion la cual ira en tu archivo .env - Recuerda este paso no sera necesario, puedes ver la App en produccion en Vercel

## Interfaz de usuario

### Ruta / Index
En esta ruta estaran enlistadas todas las tareas sin importar el status

Esta ruta esta separada en dos componentes, el primero una lista de botonos con las opciones de crear tarea, ver tareas completadas y ver tareas en proceso

El segundo componente es un conjunto de Cards que envuelven los atributos de cada tarea, la card muestra el titulo, la descripcion de la tarea, el estado de la tarea y tenemos 2 botones con el metodo update y el metodo delete para editar y eliminar la tarea corresponiente

### Funcionalidad de la Aplicacion

- Cambiar el estado de una tarea 

El usuario tiene un radio button al lado del estado de la tarea para cambiar el estado o marcar una tarea como completada y la interfaz se actualizara automaticamente sin necesidad de tener que editar toda la tarea con el boton de editar

<img src="./public/capturas/todoapp.png" alt="Inicio" width="500"/>

- Crear una tarea

Para crear una tarea con el boton de Crear Nueva Tarea, utilizaremos un formulario, este formulario tiene campos requeridos, los cuales son el nombre y el status, la descripcion es opcional

<img src="./public/capturas/new.png" alt="nueva" width="500"/>

- Eliminar una tarea

Para eliminar una tarea con el boton de eliminar, salta una alerta para que el usuario confirme si quiere eliminar la tarea

<img src="./public/capturas/delete.png" alt="alerta" width="500"/>

- Editar una tarea

Para editar una tarea con el boton de editar, seras redirigido al formulario para editar la informacion de la tarea

<img src="./public/capturas/edit.png" alt="Editar" width="500"/>

### Ruta / completed
En esta ruta estaran enlistadas todas las tareas con el status completed

<img src="./public/capturas/ruta_completed.png" alt="Editar" width="500"/>

### Ruta / in-process
En esta ruta estaran enlistadas todas las tareas con el status in process

<img src="./public/capturas/ruta_in_process.png" alt="Editar" width="500"/>



# Prueba Técnica - Desarrollador Full Stack Jr

¡Bienvenido a la prueba técnica para el puesto de Desarrollador Full Stack Jr en Tiui Soluciones!

## Descripción

En esta prueba, deberás crear una aplicación web sencilla utilizando React junto con Material-UI o Bootstrap. La aplicación será una lista de tareas (To-Do List) donde los usuarios puedan agregar, editar y eliminar tareas. Esta prueba nos permitirá evaluar tus habilidades en el desarrollo frontend, tu manejo de componentes y estilos, y tu capacidad para trabajar con tecnologías modernas.

## Requisitos

### Funcionalidades

1. **Agregar Tareas:** El usuario debe poder agregar nuevas tareas a la lista.
2. **Editar Tareas:** El usuario debe poder editar el contenido de una tarea existente.
3. **Eliminar Tareas:** El usuario debe poder eliminar tareas de la lista.
4. **Marcar Tareas como Completadas:** El usuario debe poder marcar y desmarcar tareas como completadas.
5. **Filtros:** El usuario debe poder filtrar las tareas por todas, completadas y pendientes.

### Tecnologías a Utilizar

- **React:** Deberás utilizar React para construir la aplicación.
- **Material-UI o Bootstrap:** Puedes elegir una de estas librerías para los estilos y componentes.

### Criterios de Evaluación

- **Funcionalidad:** La aplicación cumple con todos los requisitos funcionales.
- **Código:** Calidad y estructura del código.
- **Uso de Componentes:** Uso adecuado y eficiente de componentes de React.
- **Estilos:** Uso adecuado de Material-UI o Bootstrap para el diseño y estilos.
- **Creatividad:** Soluciones innovadoras y creativas en la implementación de la funcionalidad.

## Instrucciones

1. **Fork a este repositorio:**
2. **Cuanto todo este listo, genera un PR a con tu solución**
