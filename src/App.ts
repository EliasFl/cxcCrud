import "reflect-metadata"
import {createConnection} from "typeorm"

async function initializeConnection() {
    const connection = await createConnection()
    if (connection == undefined) {
        throw new Error("Error connecting to the database")
    }

    console.log("Connected to the database")
}

initializeConnection()