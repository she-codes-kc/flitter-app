// initialize database with the minimum of data required

const readline = require('readline');

// connect to database
const connection = require('./lib/connectMongoose');

// upload models
const Flit = require('./models/Flit');
const User = require('./models/User');

async function main() {

    // get user's consent before deleting
    const confirm = await askQuestion('Are you sure you want to delete all content from the database? [n] (press "y" to confirm)')
    if (!confirm) {
        process.exit();
    }

    // initializes collections
    await initUsers();
    await initFlits();

    // disconnect from the database
    connection.close();
}

main().catch(err => console.log('There was an error', err));

async function initFlits() {
    // delete all the documents from the flits collection
    const result = await Flit.deleteMany();
    await Flit.syncIndexes();
    console.log(`${result.deletedCount} flits deleted.`);

    const users = await User.find({})


    const randomUsers = (users, n) => users.sort(() => Math.random() - Math.random()).slice(0, n)

    const findUser = async (username) => await User.findOne({username: username}).exec()

    // create initial flits
    const inserted = await Flit.insertMany([
        {
            text: "Terremotos en Turquia y Siria. Rescatados un bebé y otras 6 personas.",
            image: "terremoto.jpg",
            author: await findUser("francisca_yague"),
            date: new Date("2023-02-1"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "¡Feliz día del amor y la amistad!😍",
            image: "san-valentin.jpg",
            author: await findUser("sofia_ruano"),
            date: new Date("2023-02-14"),
            kudos: randomUsers(users, 4)
        },
        {
            text: "No tengo ropa para salir pero si me compro ropa para salir me quedo sin plata para salir es como cuando conseguí trabajo para poder salir y después ya no podía salir porque tenía que ir a trabajar",
            author: await findUser("ofelia_monteagudo"),
            date: new Date("2023-01-13"),
            kudos: randomUsers(users, 9)
        },
        {
            text: "Me encontré 8 lucas en un pantalón que no usaba desde el año pasado, le cuento a un amigo y me dice 'en realidad perdiste plata'",
            image: "la-existencia-es-una-tragedia.jpg",
            author: await findUser("javier_zaragoza"),
            date: new Date("2023-02-06"),
            kudos: randomUsers(users, 7)
        },
        {
            text: "A un amigo le pidieron que le ponga nombre a los útiles escolares de su hija y el muy quemado le puso etiqueta a los lápices con la palabra 'lápiz', etiqueta con la palabra 'regla' a la regla, 'tijera' a la tijera y así con toda la cartuchera.",
            author: await findUser("oliver_valdivia"),
            date: new Date("2023-02-12"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "Fui a tramitar el DNI por pérdida. En la recepción: -Te pido tu DNI",
            image: "estupefactada.jpg",
            author: await findUser("sebastian_padron"),
            date: new Date("2023-01-27"),
            kudos: randomUsers(users, 10)
        },
        {
            text: "Ladrón entró a robar y se llevó la pastrafrola.",
            image: "pastafrola.jpg",
            author: await findUser("benito_maestre"),
            date: new Date("2023-01-29"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "Rescatan gato vestido con esmoquin robado del interior de un coche.",
            image: "gatoEsmoquin.jpg",
            author: await findUser("irina_galindo"),
            date: new Date("2023-01-31"),
            kudos: randomUsers(users, 8)
        },
        {
            text: "El taxi que te tomás después de esperar el bondi que no llegó es más caro porque sabe a derrota",
            author: await findUser("rosalia_cifuentes"),
            date: new Date("2023-02-10"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "El equipo de marketing de Casio y Twingo después de escuchar la session de Shakira con Bizarrap: 😮",
            image: "claramente.jpg",
            author: await findUser("alba_zapata"),
            date: new Date("2023-01-12"),
            kudos: randomUsers(users, 6)
        },
        {
            text: "Cuidar un sobrino, leer un libro, regar una planta. Yo ya bajé mis expectativas",
            author: await findUser("merce_murcia"),
            date: new Date("2023-02-03"),
            kudos: randomUsers(users, 11)
        },
        {
            text: "Entre una religión que convierte el agua en vino y otra que prohíbe la cerveza, cero dudas",
            author: await findUser("ofelia_monteagudo"),
            date: new Date("2022-02-06"),
            kudos: randomUsers(users, 1)
        },
        {
            text: "Un coche se desmaya al ver el precio de la gasolina",
            image: "coche-desmayado.jpg",
            author: await findUser("sebastian_padron"),
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 9)
        },
        {
            text: "Carlos III nació jubilado y morirá trabajando. El Benjamin Button de Inglaterra.",
            author: await findUser("benito_maestre"),
            date: new Date("2022-09-18"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Los videojuegos son una pasada. Te dejan vivir las fantasías más salvajes. En Los Sims, por ejemplo, puedes tener casa y trabajo.",
            author: await findUser("sebastian_padron"),
            date: new Date("2023-02-12"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "Me quedé a dormir en la casa de mi hermana y me desperté en pinterest.",
            image: "desayuno-pinterest.jpg",
            author: await findUser("rosalia_cifuentes"),
            date: new Date("2023-02-08"),
            kudos: randomUsers(users, 7)
        },
        {
            text: "Vosotras os quejaréis de vuestros maridos, pero el mío, cada vez que nos despedimos en un sitio público (por ejemplo, un supermercado) me dice bien alto:'¡Un día tu marido nos va a pillar!'",
            author: await findUser("rosalia_cifuentes"),
            date: new Date("2023-01-25"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "yo con 13 años: no me digas que hacer. Yo con 23 años: podría alguien decirme exactamente, en orden cronológico y con una gran cantidad de detalles lo que tengo que hacer???",
            author: await findUser("javier_zaragoza"),
            date: new Date("2023-01-19"),
            kudos: randomUsers(users, 6)
        },
        {
            text: "Los niños que sacábamos 9 y nos pedían un 10 y luego sacábamos 10 pero nos decían que era nuestra obligación, deberíamos tener descuento fijo en terapia",
            author: await findUser("alba_zapata"),
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Por alguna razón mi viejo decidió que era una buena idea de decoración poner todos los celulares viejos que tenemos en una repisa y re que parece un allanamiento",
            image: "celulares.jpg",
            author: await findUser("benito_maestre"),
            date: new Date("2023-02-06"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Descarriló un tren en Ohio con 100.000 galones de cloruro de vinilo, explotando en una enorme bola de lluvia tóxica que envenenó todo el agua, terra y aire",
            image: "tren-ohio.jpg",
            author: await findUser("francisca_yague"),
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 1)
        },
        {
            text: "Celebramos el #DíaMundialDeLaRadio. Es uno de los medios de comunicación más accesibles del mundo, lo que la hace esencial para promover la diversidad, el diálogo, la solidaridad y la paz.",
            image: "radio.jpg",
            author: await findUser("francisca_yague"),
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 8)
        },
        {
            text: "No puedo creer que haya gente que trate con los mozos de otra forma que no sea decir gracias una cantidad exagerada de veces",
            author: await findUser("sofia_ruano"),
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "Lo seductor que es boludear cuando tenés cosas que hacer y lo insípido que se vuelve cuando tenes tiempo libre",
            author: await findUser("oliver_valdivia"),
            date: new Date("2023-01-22"),
            kudos: randomUsers(users, 10)
        }
    ]);

    console.log(`${inserted.length} flits created`);
}

async function initUsers() {
    const result = await User.deleteMany();
    await User.syncIndexes();
    console.log(`${result.deletedCount} users deleted.`);

    const inserted = await User.insertMany([
        {
            firstName: 'Francisca',
            lastName:  'Yague',
            username: 'francisca_yague',
            email: 'francisca.yague@mail.com',
            password: 'password'
        },
        {
            firstName: 'Sofia',
            lastName:  'Ruano',
            username: 'sofia_ruano',
            email: 'sofia.ruano@mail.com',
            password: 'password'
        },
        {
            firstName: 'Ofelia',
            lastName:  'Monteagudo',
            username: 'ofelia_monteagudo',
            email: 'ofelia.monteagudo@mail.com',
            password: 'password'
        },
        {
            firstName: 'Javier',
            lastName:  'Zaragoza',
            username: 'javier_zaragoza',
            email: 'javier.zaragoza@mail.com',
            password: 'password'
        },
        {
            firstName: 'Oliver',
            lastName:  'Valdivia',
            username: 'oliver_valdivia',
            email: 'oliver.valdivia@mail.com',
            password: 'password'
        },
        {
            firstName: 'Sebastián',
            lastName:  'Padrón',
            username: 'sebastian_padron',
            email: 'sebastian.padron@mail.com',
            password: 'password'
        },
        {
            firstName: 'Rosalía',
            lastName:  'Cifuentes',
            username: 'rosalia_cifuentes',
            email: 'rosalia.cifuentes@mail.com',
            password: 'password'
        },
        {
            firstName: 'Benito',
            lastName:  'Maestre',
            username: 'benito_maestre',
            email: 'benito.maestre@mail.com',
            password: 'password'
        },
        {
            firstName: 'Irina',
            lastName:  'Galindo',
            username: 'irina_galindo',
            email: 'irina.galindo@mail.com',
            password: 'password'
        },
        {
            firstName: 'Alba',
            lastName:  'Zapata',
            username: 'alba_zapata',
            email: 'alba.zapata@mail.com',
            password: 'password'
        },
        {
            firstName: 'Merce',
            lastName:  'Murcia',
            username: 'merce_murcia',
            email: 'merce.murcia@mail.com',
            password: 'password'
        }
    ]);

    console.log(`${inserted.length} users created`);
}

function askQuestion(text) {
    return new Promise ((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(text, answer => {
            interface.close();
            if (answer.toLowerCase() === 'y') {
                resolve (true);
                return;
            }
            resolve (false)
        });
    });
}
