# Proyecto React: 2do Parcial de CIU
(codename: FAKENEWS.com)
## Descripción general

Este proyecto es una aplicación web desarrollada en React que muestra noticias obtenidas de la API de NewsAPI. Los usuarios pueden consultar noticias aleatorias y guardar enlaces de interés en una lista.

## Funcionamiento

El archivo principal del proyecto es `App.js`, el cual contiene el componente principal de la aplicación. Aquí se gestionan los estados de los enlaces guardados, se consulta la API de NewsAPI para obtener noticias y se guarda el enlace en la lista.

El archivo `Header.jsx` define el componente de encabezado de la página, que muestra una barra de navegación con enlaces a diferentes secciones de la página.

El componente `SavedLinks` se encuentra en el archivo `SavedLinks.jsx` y muestra la lista de enlaces guardados. Permite eliminar enlaces de la lista.

El archivo `Footer.jsx` define el componente de pie de página, que contiene información de contacto y enlaces a perfiles de redes sociales.

El archivo `index.html` es el archivo de entrada HTML de la aplicación.

## Instalación y ejecución

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm start` para iniciar la aplicación en modo de desarrollo.
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación.

## Dependencias

El proyecto utiliza las siguientes dependencias de npm:

- react: ^17.0.2
- react-dom: ^17.0.2
- react-scripts: 4.0.3

Estas dependencias se instalarán automáticamente al ejecutar `npm install`.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio.
2. Clona tu fork en tu máquina local.
3. Crea una nueva rama para tu función o mejora: `git checkout -b nombre-de-la-rama`.
4. Realiza tus cambios y realiza commit: `git commit -m "Descripción de los cambios"`.
5. Haz push de los cambios a tu repositorio: `git push origin nombre-de-la-rama`.
6. Crea una pull request en este repositorio.

¡Gracias por contribuir!

Por Lucián Coniglio