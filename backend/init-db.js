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
    // await Flit.syncIndexes();
    console.log(`${result.deletedCount} flits deleted.`);

    const users = await User.find({})

    const randomUsers = (users, n) => users.sort(() => Math.random() - Math.random()).slice(0, n)

    // create initial flits
    const inserted = await Flit.insertMany([
        {
            text: "Terremotos en Turquia y Siria. Rescatados un bebé y otras 6 personas.",
            image: "terremoto.jpg",
            author: "telecinco",
            date: new Date("2023-02-1"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "Idea tu hogar con las mejores ofertas ya disponibles en hipermercados y carrefour.es",
            image: "ofertas2x1.jpg",
            author: "CarrefourES",
            date: new Date("2023-02-10"),
            kudos: randomUsers(users, 4)
        },
        {
            text: "I can love me better than you can... FLOWERS SINGLE + VIDEO OUT NOW",
            image: "flowers.jpg",
            author: "MileyCyrus",
            date: new Date("2023-01-13"),
            kudos: randomUsers(users, 9)
        },
        {
            text: "Who's gonna win this year?",
            image: "futbol.jpg",
            author: "ChampionsLeague",
            date: new Date("2023-02-06"),
            kudos: randomUsers(users, 7)
        },
        {
            text: "El 12 de febrero de 1949 nació en Úbeda (Jaén) una raíz de mandrágora, un cronopio cortazariano. ¡Hoy Joaquín Sabina cumple 74 años! Y sin embargo...",
            image: "joaquinSabina.jpg",
            author: "JoaquinSabinaFans",
            date: new Date("2023-02-12"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "NO a la guerra #stopTheWar",
            image: "ukrania.jpg",
            author: "UnidosPorLaPaz",
            date: new Date("2023-01-27"),
            kudos: randomUsers(users, 10)
        },
        {
            text: "Ladrón entró a robar y se llevó la pastrafrola.",
            image: "pastafrola.jpg",
            author: "Cronica",
            date: new Date("2023-01-29"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "Rescatan gato vestido con esmoquin robado del interior de un coche.",
            image: "gatoEsmoquin.jpg",
            author: "@veinteminutos",
            date: new Date("2023-31-01"),
            kudos: randomUsers(users, 8)
        },
        {
            text: "Controla todo lo relacionado con tus finanzas desde nuestra superapp. Pruébala gratis!",
            image: "tarjeta.jpg",
            author: "RevolutApp",
            date: new Date("2023-02-10"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Nuevo single || BZRP Music Session #53! Ya disponible!!",
            image: "claramente.jpg",
            author: "Shakira",
            date: new Date("2023-01-12"),
            kudos: randomUsers(users, 6)
        },
        {
            text: "bb regalame una noche que no termine nuncaaaaaAAaa",
            image: "",
            author: "karolg",
            date: new Date("2023-02-03"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "CuCú #ElVeranoQueVivimos (12 de febrero disponible en plataformas digitales) en Jerez, Spain",
            image: "cucu.jpg",
            author: "blancasuarezweb",
            date: new Date("2022-02-06"),
            kudos: randomUsers(users, 1)
        },
        {
            text: "A veces se matarian, otras en cambio se quieren comer. Estas a punto de verlo. #TodasLasVecesQueNosEnamoramos llega pronto",
            image: "trailer.jpg",
            author: "NetflixES",
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 9)
        },
        {
            text: "El nuevo camuflaje de Joe en Londres",
            image: "joecamuflado.jpg",
            author: "NetflixES",
            date: new Date("2023-02-09"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "EN DIRECTO | Torneo de El Algarve Sub-17 | Alemania - España",
            image: "futbolsub17.jpg",
            author: "SEFutbol",
            date: new Date("2023-02-12"),
            kudos: randomUsers(users, 5)
        },
        {
            text: "Unas botas Dr. Martens y 23 looks que querrás copiar.",
            image: "botas.jpg",
            author: "VogueSpain",
            date: new Date("2023-02-08"),
            kudos: randomUsers(users, 7)
        },
        {
            text: "Pantalones vaqueros, tan favorecedores como versátiles. Que opinais?",
            image: "pantalones.jpg",
            author: "VogueSpain",
            date: new Date("2023-01-25"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "Sara Sampaio es nuestra portada de febrero. El próximo viernes 20 disponible en todos los quioscos!",
            image: "SaraSampaio.jpg",
            author: "elleEs",
            date: new Date("2023-01-19"),
            kudos: randomUsers(users, 6)
        },
        {
            text: "Muchos famosos disfrutaron del partido y la actuación de la cantante de Barbados pero, Cara Delevigne con el mensaje de su camiseta.",
            image: "cara.jpg",
            author: "elleEs",
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Recordem que des de l'1 de febrer es restringeix l'accés de patinets i monocicles elèctrics al transport públic per motius de #seguretat.",
            image: "patinets-monocicles.jpg",
            author: "ATMbcn",
            date: new Date("2023-02-06"),
            kudos: randomUsers(users, 2)
        },
        {
            text: "Descarriló un tren en Ohio con 100.000 galones de cloruro de vinilo, explotando en una enorme bola de lluvia tóxica que envenenó todo el agua, terra y aire",
            image: "tren-ohio.jpg",
            author: "Explicandotte",
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 1)
        },
        {
            text: "Celebramos el #DíaMundialDeLaRadio. Es uno de los medios de comunicación más accesibles del mundo, lo que la hace esencial para promover la diversidad, el diálogo, la solidaridad y la paz.",
            image: "radio.jpg",
            author: "ONUes",
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 8)
        },
        {
            text: "Del tercer objeto, el derribado este domingo sobre el lago Hurón, el Pentágono informó de que volaba a unos 20.000 metros de altitud y tenía aparentemente forma octogonal",
            image: "ovni.jpg",
            author: "@elpaismexico",
            date: new Date("2023-02-13"),
            kudos: randomUsers(users, 3)
        },
        {
            text: "No quiero trabajar mañana",
            author: "@juandelospalotes",
            date: "2023-01-2022",
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
