# Proyecto final del Bootcamp de Glovo y KeepCoding "Mujeres en Tech": "Flitter"

Flitter es una plataforma que permite la publicación de mini contenidos, teniendo acceso de forma pública o privada.

Dentro del área pública se podrán ejecutar las siguientes funcionalidades:

- registro de usuario
- login de usuario
- ver listado público de últimas publicaciones
- buscar y encontrar publicaciones
- ver publicaciones de un miembro
- ver publicaciones más antiguas o más recientes.

Dentro del área privada se podrán ejecutar las siguientes funcionalidades:

- baja de usuario
- logout de usuario
- creación de una publicación (flit)
- eliminación de una publicación (flit)
- seguir a un miembro
- dejar de seguir a un miembro
- ver listado personalizado de últimas publicaciones de más reciente a más antigua
- otorgar "kudos" al autor de una publicación y eliminarlos.

Para ello, tuvimos que poner en práctica lo aprendido durante el bootcamp, simulando una situación real: desarrollar un proyecto mediante iteraciones, tomar decisiones arquitectónicas en equipo y cumplir con un plazo de entrega.

Está estructurado y ejecutado a través de las siguientes herramientas:

- [Node JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [Mongo DB Atlas](https://www.mongodb.com/es/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Jwt](https://jwt.io)
- [Vue](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Axios](https://www.npmjs.com/package/axios)


## Backend
### Ejecución y configuración:

##### MongoDB:
Para que la API funcione es necesario tener instalado MongoDB. Una vez hecho esto, ejecutar el servidor de MongoDB en local:

`./bin/mongod --dbpath ./data`

##### Instalar dependencias:

 `npm install`

###### Inicializar base de datos:

a traves de: `npm run init-db`.

###### Ejecutar la app en producción:

`npm start`

se ejecutará en http://localhost:3000/

###### Ejecutar la app en desarrollo:

`npm run dev`
### Documentación de API

##### Usuario

[POST]`http://localhost:3000/api/auth/login`: para hacer log in

[POST] `http://localhost:3000/api/auth/register`: para crear usuario

[GET] `http://localhost:3000/api/users/{username}`: para obtener el perfil de un usuario

[PUT] `http://localhost:3000/api/users/{id}`: para actualizar un perfil de usuario

[DELETE] `http://localhost:3000/api/users/{id}`: para eliminar un perfil de usuario

##### Flits

[GET] `http://localhost:3000/api/flits`: para obtener el listado de flits

-Se ordenan por fecha con orden descendente
[GET] `http://localhost:3000/api/flits?sort=-date`

-Se obtienen con una paginación de 10 flits
[GET] `http://localhost:3000/api/flits?skip=0&limit=10`

[GET] `http://localhost:3000/api/flits/{id}`: para obtener un flit en particular

[PUT] `http://localhost:3000/api/flits/{id}`: para actualizar un flit

[DELETE] `http://localhost:3000/api/flits/{id}`: para eliminar un flit

[POST] `http://localhost:3000/api/flits`: para crear un flit

Enviando un objeto como el siguiente, teniendo como único requerimiento que posea un texto con contenido:
```
# Body

    {
     'text': 'Esto es una prueba para el README'
    }
```

## Frontend
### Instalación de dependencias

```
npm install
```

### Ejecución del proyecto en modo desarrollo

```
npm run serve
```

## Usuarios de prueba

```
{
    firstName: 'Francisca',
    lastName:  'Yague',
    username: 'francisca_yague',
    email: 'francisca.yague@mail.com',
    password: 'password',
    profilePic: 'public/images/francisca-yague.jpg'

},
// ...

```

### Compilación del proyecto para producción

```
npm run build
```

### Lint

```
npm run lint
```

### Customizar configuración

[Configuration Reference](https://cli.vuejs.org/config/).


## Autores

- [Algaze Abraham, Sabrina](https://github.com/sabrialgaze)
- [Castellani, Georgina Aylén](https://github.com/geor-castellani)
- [García, Silvia Anahí](https://github.com/gsanahi)
- [Manfredi, Gina Noelia](https://github.com/giginni)
