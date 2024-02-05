// Import Keys
const keys = require("./config/keys")

const express = require("express");
const app = express()
const cors = require('cors');
app.use(cors());
require('dotenv').config();
app.use(express.json());
// Bring the service file here and apply the changes
require('./Services/cache');
const authrouter = require('./Router/AuthRouter');
const router = require('./Router/NoteRouter')
const AuthMiddleware = require('./MiddleWare/Authorize')


// Cluster Module
const cluster = require('cluster')
cluster.schedulingPolicy = cluster.SCHED_RR;
app.use('/auth', authrouter);
app.use('/api', AuthMiddleware, router);


if (cluster.isMaster) {
    cluster.fork();
} else {
    console.log("Now, I'm Child Process");
    const PORT = keys.PORT;
    const { ConnectDB } = require("./ConnecttoMongoDB/Connection")
    const StartServer = async () => {
        try {
            await ConnectDB(keys.MONGOURL)
            app.listen(PORT, console.log(`Server is Listening on PORT...... ${PORT}`))
        } catch (err) {
            console.log(err.message);
        }
    }
    StartServer();
}
