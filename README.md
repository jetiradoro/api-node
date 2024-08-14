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
generado lo guardamos en la ruta `/src/api/postman.json` seguidamente lanzamos el comando de generación de docuementación:

```bash
npm run apigen
```

y ya podemos acceder a la documentación a través de dos urls, segun si la queremos ver con swagger o con redoc

- http://mi_dominio/api/docs/swagger
- http://mi_dominio/api/docs/redoc
