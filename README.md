# Proyecto final: "Flitter"

Proyecto final del Bootcamp de Glovo y KeepCoding "Mujeres en tech". Es una plataforma que permite la publicación de minicontenidos, teniendo acceso de forma pública o privada. 
Dentro del áreapública se podrán ejecutar las siguientes funcionalidades: registro de usuario, login de usuario, ver listado público de últimas publicaciones, buscar y encontrar publicaciones, ver publicaciones de un miembro, ver publicaciones más antiguas o más recientes.
Dentro del área privada se podrán ejecutar las siguientes funcionalidades: baja de usuario, logout de usuario, creación de una publicación (flit), eliminación de una publicación (flit), seguir a un miembro, dejar de seguir a un miembro, ver listado personalizado de últimas publicaciones de más reciente a más antigua, otorgar "kudos" al autor de una publicación y eliminarlos.

Para ello, tuvimos que poner en práctica lo aprendido durante el bootcamp, simulando una situación real: desarrollar un proyecto mediante iteraciones, tomar decisiones arquitectónicas en equipo y cumplir con un plazo de entrega.

Esta estructurado y ejecutado a traves de las siguientes herramientas:

- [Mongoose](https://mongoosejs.com/)
- [Mongo DB Atlas](https://www.mongodb.com/es/atlas/database)
- [Node JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [Jwt](https://jwt.io)
- [Vue](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Axios](https://www.npmjs.com/package/axios)

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

##### Usuario

POST `/apps/auth/login`: para hacer log in

POST `/apps/auth/register`: para crear usuario# Flits

GET `/apps/users/:id`: para obtener el perfil de un usuario

PUT `/apps/users/:id`: para actualizar un perfil de usuario

DELETE `/apps/users/:id`: para eliminar un perfil de usuario

##### Flits

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
        {
            firstName: 'Sofia',
            lastName:  'Ruano',
            username: 'sofia_ruano',
            email: 'sofia.ruano@mail.com',
            password: 'password',
            profilePic: 'public/images/sofia-ruano.jpg'
        },
        {
            firstName: 'Ofelia',
            lastName:  'Monteagudo',
            username: 'ofelia_monteagudo',
            email: 'ofelia.monteagudo@mail.com',
            password: 'password',
            profilePic: 'public/images/ofelia-monteagudo.jpg'
        },
        {
            firstName: 'Javier',
            lastName:  'Zaragoza',
            username: 'javier_zaragoza',
            email: 'javier.zaragoza@mail.com',
            password: 'password',
            profilePic: 'public/images/javier-zaragoza.jpg'
        },
        {
            firstName: 'Oliver',
            lastName:  'Valdivia',
            username: 'oliver_valdivia',
            email: 'oliver.valdivia@mail.com',
            password: 'password',
            profilePic: 'public/images/oliver-valdivia.jpg'
        },
        {
            firstName: 'Sebastián',
            lastName:  'Padrón',
            username: 'sebastian_padron',
            email: 'sebastian.padron@mail.com',
            password: 'password',
            profilePic: 'public/images/sebastian-padron.jpg'
        },
        {
            firstName: 'Rosalía',
            lastName:  'Cifuentes',
            username: 'rosalia_cifuentes',
            email: 'rosalia.cifuentes@mail.com',
            password: 'password',
            profilePic: 'public/images/rosalia-cifuentes.jpg'
        },
        {
            firstName: 'Benito',
            lastName:  'Maestre',
            username: 'benito_maestre',
            email: 'benito.maestre@mail.com',
            password: 'password',
            profilePic: 'public/images/benito-maestre.jpg'
        },
        {
            firstName: 'Irina',
            lastName:  'Galindo',
            username: 'irina_galindo',
            email: 'irina.galindo@mail.com',
            password: 'password',
            profilePic: 'public/images/irina-galindo.jpg'
        },
        {
            firstName: 'Alba',
            lastName:  'Zapata',
            username: 'alba_zapata',
            email: 'alba.zapata@mail.com',
            password: 'password',
            profilePic: 'public/images/alba-zapata.jpg'
        },
        {
            firstName: 'Merce',
            lastName:  'Murcia',
            username: 'merce_murcia',
            email: 'merce.murcia@mail.com',
            password: 'password',
            profilePic: 'public/images/merce-murcia.jpg'
        }
```

### Compilación del proyecto para producción

```
npm run build
```

### Lint

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


## Autores

- [Algaze Abraham, Sabrina](https://github.com/sabrialgaze)
- [Castellani, Georgina Aylén](https://github.com/geor-castellani)
- [García, Silvia Anahí](https://github.com/gsanahi)
- [Manfredi, Gina Noelia](https://github.com/giginni)
