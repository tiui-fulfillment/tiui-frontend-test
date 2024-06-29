## DESCRIPCIÓN

**Nombre:** Gabriel Colmenares Rangel
**Email:** gcolmenaresr2001@gmail.com
**WhatsApp:** +52 3173887075
**Ciudad:** Autlán de Navarro, Jalisco
**País:** México

## ¿Cómo describirías el propósito de este proyecto? (opcional)

El propósito de este proyecto es evaluar cómo me desenvuelvo trabajando con tecnologías más nuevas como lo es React así como para observar el criterio y creatividad para desarrollar una aplicación web desde el frontend así como también el uso de librearías con componentes ya pre-hechos como lo es Bootstrap en mí caso.
Evaluar cómo es nuestra lógica para darle funcionalidad a la página, cómo usamos los componentes y en general todas las ventajas que nos ofrece React.

## ¿Cuál es tu stack tecnológico preferido? ¿Por qué? (opcional)

Mi stack preferido o donde me siento más cómodo es usando Python (Flask) como backend, bases de datos relacionales como postgresql y para frontend Angular y Bootstrap. Pero también me siento cómodo utilizando NestJS en el backend. De igual manera no estoy cerrado solamente a estas tecnologías, sino que también estoy dispuesto a probar y aprender cosas nuevas.

## Descripción de la Solución


Mi solución para esta prueba fue muy simple, ofrezco al usuario una interfaz agradable a la vista e intuitiva.
Contiene un input text con una placeholder con la instrucción, de esta manera evitamos utilzar más labels de las necesarias, así mismo a un lado un botón para con el signo de '+' para agregar la tarea, si se mantiene el cursor sobre el botón muestra la tarea que realiza.
Después está el filtro con las funciones de filtrar todas las tareas, las completadas y las pendientes con un color ligeramente diferente al filtro que está activado en ese momento.
Por último está el apartado de las lista de tareas, aquí se pueden ver listadas todas las tareas que han sido agregadas.
Cada tarea consta de 4 apartados
    1) Checkbox para marcar y desmarcar las tareas que ya fueron completadas, cuando se presiona cambiar a un color azul y a una ✔ para dar a enter que ya se realizó.
    2) Span con la tarea que se ha agregado, aquí cuando se utiliza el checkbox y es marcado como completado se tacha la tarea y se le asigna un color un poco más opaco para dar a enternder de manera fácil que esta tarea ya fue realizada
    3) Botón de editar, aquí utilicé un ícono que proporciona directamente react, este símbolo muestra un papel y un lápiz simbolozando la funcionalidad de editar, cuando se presiona sa abre un Modal con un input text con el texto de la tarea, en dado caso de que solo se requieta corregir una parte de la tarea, además de los botones de Cancelar y Guardar cambios, cuando se presiona el primero el texto queda igual y cuando se usa el segundo se guarda el nuevo texto y se actualiza en la lista.
    4) Botón borrar, nuevamente haciendo uso de los íconos de React se seleccionó un bote de basura simbolozando la acción de eliminar así como un Placeholder que describe la acción del botón, cuando se presiona aparece un Modal para realizar una confiarmación hacia el usuario y pueda cancelar en dado caso de que se haya equivocado o pueda proseguir con la eliminación de la tarea, si se elimina la tarea se borra de la lista de tareas

## Instrucciones para Ejecutar el Proyecto

Por favor, proporciona una breve descripción de como ejeuctar el proyecto, plus si lo tienes en el README.md 

Requisitos:
- Node.js
- npm

1) Navegar hasta el directorio del proyecto (tiui-frontend-test/todo)

2) Instalar dependencias
- npm install
- npx create-react-app

3) Instala las dependencias
- npm install react-bootstrap bootstrap
- npm install react-icons
- npm install uuid

4) Ejecuta el proyecto
- npm run start

## ¿Que resaltarias de tu proyecto?

Al trabajar con Bootstrap te asegura que será una página responsive lo cual siempre es algo necesario, es agradable a la vista, no tiene colores que lastimen la vista pero al mismo tiempo resaltan las cosas importantes.
Si se quiere eliminar una tarea se necesita realizar primero una confirmación por parte del usuario, esto para evitar accidentes indeseados.
El componente que almacena la lista de tareas tiene la característica de tener su propio scrollbar, esto para evitar que la página se pueda a llegar hacer muy larga contemplando el propósito que tiene.
Es intuitiva y fácil de utilizar, pero aún así si se mantiene el puntero sobre algún botón se especifica la función que realiza, se utilizan al mismo tiempo íconos representativos al funcionamiento.
A pesar de llegar a utilizar pantallas demasiado largas no se hace demasiado grande el área de trabajo, se mantiene uniforme y de la misma anchura
