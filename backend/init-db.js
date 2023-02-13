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

    // create initial flits
    var flits = [];
    await users.forEach(async (user) => {
        flits.push({ text: 'Hola Mundo', image: 'hola-mundo.jpg', author: user, date: 2023-01-27, kudos: [5] })
        flits.push({ text: 'Hello World', author: user, date: 2023-02-06, kudos: [3] })
        flits.push({ text: '1,2,3 probando', image: '123.jpg', author: user, date: 2023-01-18, kudos: [11] })
        flits.push({ text: 'Test', image: 'test.jpg', author: user, date: 2023-01-04, kudos: [8] })
        flits.push({ text: 'Prueba', author: user, date: 2023-02-02, kudos: [7] })
    });

    const inserted = await Flit.insertMany(flits)

    console.log(`${inserted.length} flits created`);
}

async function initUsers() {
    const result = await User.deleteMany();
    await User.syncIndexes();
    console.log(`${result.deletedCount} users deleted.`);

    var users = [];

    for (var i = 1; i <= 10; i++) {
        users.push({
            firstName: 'Fake',
            lastName: `User ${i}`,
            username: `fake${i}`,
            email: `fake${i}@mail.com`,
            password: 'password'
        });
    }

    const inserted = await User.insertMany(users);

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
