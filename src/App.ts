import "reflect-metadata"
import {createConnection} from "typeorm"
import * as bodyParser from "body-parser"
import {Request, Response} from "express"
import * as express from "express"

createConnection().then(connection => {
    //Initializes express server
    const app = express()
    app.use(bodyParser.json())

    const port = 8080
    app.listen(port)
    console.log(`Server has started at port ${port}`)
}).catch(error => console.log(`An error has been encountered starting the server: ${error}`))