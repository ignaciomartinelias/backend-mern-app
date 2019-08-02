//? Import environment variables
require('dotenv').config();

//? Import app and database connection
const app = require("./app");
    require('./database');

//? Run Server
async function main() {
    await app.listen(process.env.PORT || 4000, process.env.IP);
    console.log("Server Started!");
}

main();