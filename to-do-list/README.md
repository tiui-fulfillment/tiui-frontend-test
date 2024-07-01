# To-Do List App - React y Tailwind CSS

## Descripción

Esta applicación de tareas fue desarrollada utilizando la librería React, el framework Tailwind CSS y la arquitectura basada en componentes.
### Funciones que puede realizar el usuario
- Agregar nuevas tareas
- Editar tareas pendientes de la lista 
- Marcar/Desmarcar como completas/incompletas las tareas de la lista
- Eliminar tareas de la lista
- Filtrar las tareas: todas, pendientes y completas

### Componentes
Los componentes se almacenan dentro del directiorio components
- Header: Incluye el título de la app
- Input: Contiene el input para ingreso y edición de tareas
- Todo: Representa una tarea de la lista
- TodoList: Incluye las tareas y los filtros
- TodoFilters: Contiene el total de tareas y los botones de filtro

### Dependencias
Se decidio por utilizar el siguiente framework CSS que se encuentra fuera de las opciones propuestas, puesto que considero que es una tecnología moderna y práctica para el desarrollo.

- [ ] Bootstrap
- [ ] Material-UI
- [x] Tailwind CSS

## Instalación
Ejecutar el siguiente comando dentro del directorio to-do-list, para instalar las dependencias.
### `npm install`

## Ejecución
Ejecutar el siguiente comando dentro del directorio to-do-list, para iniciar la aplicación en modo de desarrollo.
### `npm start`
Visualisar en su navegador en [http://localhost:3000](http://localhost:3000)

## Uso de la app

- Agregar tarea: Teclear la descripción de la tarea dentro del formulario situado en la parte superior y pulsar "Enter" para agregar.
- Editar tarea: Pulsar sobre el icono del "Lápiz" situado del lado derecho de cada tarea "Pendiente", realizar los cambios correspondientes y pulsar "Enter" para actualizar.
- Marcar tarea como completa: Pulsar el icono de "Circulo" de color gris que se encuentra del lado izquierdo del título de cada tarea (el icono cambia a color verde).
- Desmarcar tarea completa: Pulsar el icono de "Circulo" de color verde situado a la izquiera del título de cada tarea (el icono cambia a color gris).
- Eliminar tarea: Pulsar el icono de "Equis" situado al extremo derecho de cada tarea.
- Filtrar tareas: Pulsar el botón correspondiente según corresponda con el filtro que se quiere aplicar; "All" (todas las tareas), "Pending" (Tareas pendientes) o "Complete" (Tareas completas).


