import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, ManyToOne} from "typeorm"
import { TipoDocumento } from "./TipoDocumento"
import { Cliente } from "./Cliente"
import {TipoMovimiento} from "../utils"

@Entity()
export class Transaccion {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: ["DB", "CR"],
        default: TipoMovimiento.DEBITO
    })
    tipoMovimiento: TipoMovimiento

    @ManyToOne(type => TipoDocumento)
    tipoDocumento: TipoDocumento

    @Column("int")
    numeroDocumento: number

    @CreateDateColumn({type: "timestamptz"})
    fecha: string

    @ManyToOne(type => Cliente, cliente => cliente.transacciones)
    cliente: Cliente

    @Column("money")
    monto: number
}