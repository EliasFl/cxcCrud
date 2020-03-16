import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, ManyToOne} from "typeorm"
import { TipoDocumento } from "./TipoDocumento"
import { Cliente } from "./Cliente"

export enum TipoMovimiento {
    DEBITO = "DB",
    CREDITO = "CR"
}

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

    @OneToOne(type => TipoDocumento)
    @JoinColumn()
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