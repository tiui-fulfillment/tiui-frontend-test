# Documentación de la API de la Lista de Tareas (Todo List)

## Introducción
Esta API permite gestionar una lista de tareas, incluyendo la creación, lectura, actualización y eliminación de tareas.

## Rutas de la API

## Obtener todas las tareas
Endpoint: /api/todos

Método: GET

Descripción: Devuelve una lista de todas las tareas.

#### Ejemplo de Respuesta
{
  "data": [
    {
      "name": "Tarea 1",
      "description": "Tarea 1 actualizada desde la api",
      "status": "In Process",
      "createdAt": "2024-06-28T00:37:11.489Z",
      "updatedAt": "2024-06-28T00:57:55.169Z",
      "id": "667e05b73982741894dd8868"
    },
    {
      "name": "Tarea 2",
      "description": "Tarea Insertada desde Peticion a API",
      "status": "In Process",
      "createdAt": "2024-06-28T00:56:25.219Z",
      "updatedAt": "2024-06-28T00:56:25.219Z",
      "id": "667e0a393982741894dd8870"
    },
    {
      "name": "Tarea 3",
      "description": "Tarea 3 Insertada desde Peticion a API",
      "status": "Completed",
      "createdAt": "2024-06-28T00:58:35.284Z",
      "updatedAt": "2024-06-28T00:58:35.284Z",
      "id": "667e0abb3982741894dd8878"
    }
  ]
}


## Obtener todas las tareas por Status
Endpoint: /api/todos?status=completed

Método: GET

Descripción: Devuelve una lista de todas las tareas que coincidan con el status.

#### Ejemplo de Respuesta
{
  "data": [
    {
      "name": "Tarea 3",
      "description": "Tarea 3 Insertada desde Peticion a API",
      "status": "completed",
      "createdAt": "2024-06-28T00:58:35.284Z",
      "updatedAt": "2024-06-28T18:48:48.512Z",
      "id": "667e0abb3982741894dd8878"
    },
    {
      "name": "Tarea 4",
      "description": "Tarea desde interfaz",
      "status": "completed",
      "createdAt": "2024-06-28T17:23:07.647Z",
      "updatedAt": "2024-06-28T19:35:15.341Z",
      "id": "667ef17bfc66ea3f711bb9fd"
    }
  ]
}


## Crear una tarea
Endpoint: /api/todos

Método: POST

Content-Type application/json

{
  "name": "Tarea 5",
  "description":"Tarea Insertada desde Peticiona API",
  "status": "In Process"
}


Descripción: Devuelve la tarea creada.

#### Ejemplo de Respuesta
{
  "todo": {
    "name": "Tarea 5",
    "description": "Tarea Insertada desde Peticiona API",
    "status": "In Process",
    "createdAt": "2024-06-28T16:51:24.189Z",
    "updatedAt": "2024-06-28T16:51:24.189Z",
    "id": "667eea0c84585aadd20c5592"
  },
  "message": "Your Todo has been Created"
}

## Actualizar una tarea
Endpoint: /api/todo/id

Método: PUT

Content-Type application/json

{
  "name": "Tarea 5 Actualizada",
  "description":"Tarea Insertada desde Peticion a API Actualizada",
  "status": "Completed"
}

Descripción: Actualiza la tarea y devuelve la tarea Actualizada.

#### Ejemplo de Respuesta
{
  "message": "Todo 667eea0c84585aadd20c5592 updated",
  "todo": {
    "name": "Tarea 5 Actualizada",
    "description": "Tarea Insertada desde Peticion a API Actualizada",
    "status": "Completed",
    "createdAt": "2024-06-28T16:51:24.189Z",
    "updatedAt": "2024-06-28T16:54:35.635Z",
    "id": "667eea0c84585aadd20c5592"
  }
}

## Eliminar una tarea
Endpoint: /api/todo/id

Método: DELETE

Descripción: Elimina la tarea y devuelve el id de la tarea eliminada.

#### Ejemplo de Respuesta
{
  "message": "Todo 667eea0c84585aadd20c5592 deleted"
}

