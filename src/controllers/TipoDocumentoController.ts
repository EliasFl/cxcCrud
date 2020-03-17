import {getRepository} from "typeorm"
import {NextFunction, Request, Response} from "express"
import {TipoDocumento} from "../models/TipoDocumento"

export class TipoDocumentoController {
    private repository = getRepository(TipoDocumento)

    async all(request: Request, response: Response, next: NextFunction) {
        return response.send(this.repository.find())
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return response.send(this.repository.findOne(request.params.id))
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        return this.repository.update(request.params.id, request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const recordToRemove = await this.repository.findOne(request.params.id)
        return this.repository.remove(recordToRemove)
    }
}