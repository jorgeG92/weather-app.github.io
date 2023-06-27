# Weather App

## Instrucciones de uso

1. La primera vez que se utiliza la aplicación no se muestra nada. En primer lugar
   se deberá buscar una ciudad dentro de la AppBar superior, dentro del Textfield,
   según se esta escribiendo irán apareciendo opciones. Seleccione una

2. Una vez seleccionada la ciudad, se solicitará información del tiempo en dicha
   ciudad.

3. Existe la opción en la parte inferior, debajo de la información del tiempo,
   se mostrará un botón para añadir esta ciudad como favorita.

4. Si se quiere dejar de guardar la información de la ciudad. En la parte inferior
   hay un botón "Eliminar ciudad", que nos permite deshacer el paso anterior

## Scripts disponibles en el CLI

En el directorio del respositorio. Estos son los comandos disponibles. Si
es la primera vez que utiliza el repositorio, no olvide utilizar `npm i` para
instalar el proyecto

### `npm start`

Arranca la aplicación en modo desarrollo.
Abrir [http://localhost:3000](http://localhost:3000) desde el navegador.

### `npm test`

Lanza la ejecución de los test.

### `npm run build`

Construye la aplicación para ser desplegada

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run coverage`

Lanza el constructor del "coverage" para saber cuantas lineas de código esta
abarcadas por el test.

### `npm run deploy`

Despliega la página dentro del repositorio. Previamente ejecuta `npm run predeploy`.

### `npm run serve`

Despliega un servidor local, en el _puerto 4000_ en el que se monta la aplicación. Util para desarrollar
el funcionamiento de "serviceWorker"

## APIs utilizadas

### [Open Meteo](https://open-meteo.com/)

API que proporciona la información meteorológica dadas unas coordenadas.

### [Gecode](https://geocode.maps.co/)

API que proporciona la información geográfica dada una ciudad. Para esta aplicación
ha sido utilizada para obtener las coordenadas dado el nombre de una ciudad.

## Tecnologías utilizadas

### React

Framework principal para la creación de componentes.

### @emotion y MUI

MUI es una galería de componentes creados en React bajo las lineas de Material Design.
Emotion permite dar estilos concretos de CSS a componentes en React y es utilizado
por MUI

### Redux y @redux/toolkit

Redux es utilizado para la gestión de la memoria local del componente. Redux-toolkit
permite manejar el estado durante el desarrollo de una forma más amena.

### Dayjs

Es una librería para el manejo del objeto tipo Date.

### Prettier y Eslint

Prettier formatea el código facilitando la experiencia en desarrollo. Eslint permite
crear reglas que durante el desarrollo y compilación del proyecto evitara cometer
errores.

### CRA

Create-react-app permite generar una base del proyecto con una configuración
por defecto de React, Typescript y Jset.

Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).
