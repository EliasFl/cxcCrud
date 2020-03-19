import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Cliente } from "../models/Cliente";

export class ClienteController {
  private repository = getRepository(Cliente);

  async all(request: Request, response: Response, next: NextFunction) {
    const results = await this.repository.find();
    return response.status(200).send(results);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const result = await this.repository.findOne(request.params.id);
    return response.send(result);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const result = await this.repository.save(request.body);
    return response.status(201).send(result);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    const cliente = await this.repository.findOne(id);
    if (cliente !== undefined) {
      const updatedRecord = await this.repository.update(
        request.params.id,
        request.body
      );
      return response.status(200).send(updatedRecord);
    }
    return response.status(404).send({ message: "Record not found" });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const recordToRemove = await this.repository.findOne(request.params.id);
    await this.repository.remove(recordToRemove);

    return response
      .status(200)
      .send({ message: "Record deleted successfully" });
  }
}
