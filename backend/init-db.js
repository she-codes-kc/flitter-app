// initializes database with the minimum of data needeed

// connect to database
const connection = require('./lib/connectMongoose');

// upload models
const Flit = require('./models/Flit');

async function main() {
    // initializes collections
    await initFlits();
    
    // disconnect from the database
    connection.close();
}

async function initFlits() {
    // delete all the documents from the flits collection
    const result = await Flit.deleteMany();
    console.log(`${result.deletedCount} flits deleted.`);

    // create initial flits
    const inserted = await Flit.insertMany([
        { text: 'Hola Mundo', image: 'hola-mundo.jpg', author: '@sabrialgaze', date: 2023-01-27, kudos: [5] },
        { text: 'Hello World', author: '@giginni', date: 2023-02-06, kudos: [3] },
        { text: '1,2,3 probando', image: '123.jpg', author: '@gsanahi', date: 2023-01-18, kudos: [11] },
        { text: 'Test', image: 'test.jpg', author: '@geor-castellani', date: 2023-01-04, kudos: [8] },
        { text: 'Prueba', author: '@flaviaecheverria', date: 2023-02-02, kudos: [7] }
    ]);
    console.log(`${inserted.length} flits created`);
}

main().catch(err => console.log('There was an error', err));
