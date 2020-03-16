import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    nombre: string

    @Column("bigint")
    cedula: number

    @Column("money")
    limiteDeCredito: number

    @Column("char")
    estado: string

    @OneToMany(type => Transaccion, transaccion => transaccion.cliente)
    transacciones: Transaccion[]
}
