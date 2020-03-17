import {getRepository} from "typeorm"
import {NextFunction, Request, Response} from "express"
import {TipoDocumento} from "../models/TipoDocumento"

export class TipoDocumentoController {
    private repository = getRepository(TipoDocumento)

    async all(request: Request, response: Response, next: NextFunction) {
        return response.status(200).send(this.repository.find())
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return response.send(this.repository.findOne(request.params.id))
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return response.status(201).send(this.repository.save(request.body))
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id
        const tipoDocumento = await this.repository.findOne(id)
        if (tipoDocumento !== undefined) {
            const updatedRecord = await this.repository.update(request.params.id, request.body)
            return response.status(200).send(updatedRecord)
        }
        return response.status(404).send({message: "Record not found"})
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const recordToRemove = await this.repository.findOne(request.params.id)
        await this.repository.remove(recordToRemove)

        return response.status(200).send({message: "Record deleted successfully"})
    }
}