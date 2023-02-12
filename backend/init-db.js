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
    await initFlits();
    await initUsers();
    
    // disconnect from the database
    connection.close();
}

main().catch(err => console.log('There was an error', err));

async function initFlits() {
    // delete all the documents from the flits collection
    const result = await Flit.deleteMany();
    await Flit.syncIndexes();
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

async function initUsers() {
    const result = await User.deleteMany();
    await User.syncIndexes();
    console.log(`${result.deletedCount} users deleted.`);

    const inserted = await User.insertMany([
        { firstName: 'Leon', lastName: 'Sukm', username: '@leonsukm', email: 'leon.sukm@mail.com', password: '1234' }
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
