import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Transaccion } from "./Transaccion"
import { AsientoContable } from "./AsientoContable"

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

    @OneToMany(type => AsientoContable, asientoContable => asientoContable.cliente)
    asientosContables: AsientoContable[]
}
