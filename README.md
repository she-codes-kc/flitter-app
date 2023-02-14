# Proyecto final: "Flitter"

Proyecto final del Bootcamp de Glovo y KeepCoding "Mujeres en tech". Es una plataforma que permite la publicación de minicontenidos, teniendo acceso de forma pública o privada. 
Dentro del áreapública se podrán ejecutar las siguientes funcionalidades: registro de usuario, login de usuario, ver listado público de últimas publicaciones, buscar y encontrar publicaciones, ver publicaciones de un miembro, ver publicaciones más antiguas o más recientes.
Dentro del área privada se podrán ejecutar las siguientes funcionalidades: baja de usuario, logout de usuario, creación de una publicación (flit), eliminación de una publicación (flit), seguir a un miembro, dejar de seguir a un miembro, ver listado personalizado de últimas publicaciones de más reciente a más antigua, otorgar "kudos" al autor de una publicación y eliminarlos.

Para ello, tuvimos que poner en práctica lo aprendido durante el bootcamp, simulando una situación real: desarrollar un proyecto mediante iteraciones, tomar decisiones arquitectónicas en equipo y cumplir con un plazo de entrega.

Esta estructurado y ejecutado a traves de las siguientes herramientas:

- [Mongoose] (https://mongoosejs.com/)
- [Mongo DB Atlas](https://www.mongodb.com/es/atlas/database)
- [Node JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [Jwt](https://jwt.io)
- [Vue.js](https://vuejs.org)

## Backend
### Ejecución y configuración:

##### Instalar dependencias
ejecutar `npm install`

###### Inicializar base de datos

a traves de: `npm run init-db`.

###### Ejecutar la app

a traves del comando `npm start` 
se ejecutara en `http://localhost:3000/`

#### APIs

# Usuario

POST `/apps/auth/login`: para hacer log in

POST `/apps/auth/register`: para crear usuario# Flits

GET `/apps/users/:id`: para obtener el perfil de un usuario

PUT `/apps/users/:id`: para actualizar un perfil de usuario

DELETE `/apps/users/:id`: para eliminar un perfil de usuario

# Flits

GET `/apps/flits/`: para obtener el listado de flits

-Se pueden ordenar por orden descendente
-Se obtienen con una paginación de 10 flits

GET `/apps/flits/:id`: para obtener un flit en particular

PUT `/apps/flits/:id`: para actualizar un flit

DELETE `/apps/flits/:id`: para eliminar un flit

POST `/apps/flits/`: para creat un flit

-Recibe un json con las siguientes caracteristicas:

```json
    {
     'text',
     'image': 'null',
     'author',
     'date': new Date(),
     'kudos': [],
    }
```    

## Frontend



## Autores

- [Algaze Abraham, Sabrina](https://github.com/sabrialgaze)
- [Castellani, Georgina Aylén](https://github.com/geor-castellani)
- [García, Silvia Anahí](https://github.com/gsanahi)
- [Manfredi, Gina Noeliakee](https://github.com/giginni)
