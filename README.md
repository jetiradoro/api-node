# Descripción

Api Node con Express

# Librerías

El desarrollo de la API utiliza las siguientes librerías dónde podéis consultar la documentación oficial

- **[knex](http://knexjs.org/)**: ORM de extracción de base de datos
- **[jest](https://jestjs.io/es-ES/)**: Librería para pruebas unitarias
- **[axios](https://axios-http.com/docs/intro)**: Para peticiones ajax

# Scripts

Desde el terminal se pueden ejecutar diferentes scripts

- **npm run test**: Ejecuta los tests unitarios
- **npm run testw**: Ejecuta los tests unitarios y se queda escuchando cualquier cambio en los archivos para volver a ejecutar el test
- **npm run test:coverage**: Ejecuta el test y saca un informe del coverage de testeo de la aplicación
- **npm run start**: Lanza el servicio que se queda escuchando el puerto 80 e inicia la aplicación.
- **npm run apigen**: Ejecuta la compilación del fichero json de postman para generar la documentación swagger

# Documentación de la API

La Api la podemos dejar autodocumentada, para ello lo único que hay que hacer es exportar la colección del postman, y el archivo json
generado lo guardamos en la ruta `/src/components/api-docs/assets/postman.json` seguidamente lanzamos el comando de generación de docuementación:

```bash
npm run apigen
```

y ya podemos acceder a la documentación a través de dos urls, segun si la queremos ver con swagger o con redoc

- http://mi_dominio/api/docs/swagger
- http://mi_dominio/api/docs/redoc

# Ejemplos de uso

> **No borrar el componente api-docs. Ya que sin el no se podrá generar la documentación de la api. Borrarlo solo en caso de no querer documentar**

Se han creado un par de ejemplos de uso para que podáis partir de la estructura de ficheros que he creado.

Las dos rutas utilizan autorizaicón por **Bearer token**, con fines demostrativos la contraseña del token es **secret**. En el despliegue de vuestra aplicación API solo debéis crear la variable de entorno **API_BEARER_TOKEN** con el valor que queráis para securizar las peticiones a vuestra api, utilizando los middlewares que he puesto en los ejemplos.

1. Example
2. Dragon Ball Api

## Example

Ubicado en components example. Podéis encontrar un endpoint en la base de la ruta `https://api.smartfulcode.com/example` el tipo de respuesta de ejemplo de uso para la api.
Esta petición requiere de Bearer Token informado

## Dragon Ball Api

Este endpoint está usando la API pública de Dragon Ball, pero se ha hecho pasar por aquí solo con fines demostrativos de como podemos usar esta información para devolver el resultado deseado a nuestros endpoints.

Se ha puesto a disposición la ruta `https://api.smartfulcode.com/dragon-ball/characters` para obtener un listado de los personajes de la serie.

# Documentación de los ejemplos

Para poder ver un ejemplo de la documentación generada sobre los ejemplos creados, se han puesto a disposición dos servicios del standar **OpenApi**

- Swagger: [https://api.smartfulcode.com/docs/swagger](https://api.smartfulcode.com/docs/swagger)
- Redoc: [https://api.smartfulcode.com/docs/redoc](https://api.smartfulcode.com/docs/redoc)

Son dos formas de poder docuementar por interfaz gráfica de forma sencilla y usando el estandar de openApi y estructura de archivos swagger.
