import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn
} from "typeorm"
import {Cliente} from "./Cliente"
import { TipoMovimiento } from "../utils"

@Entity()
export class AsientoContable {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    descripcion: string

    @ManyToOne(type => Cliente, cliente => cliente.asientosContables)
    cliente: Cliente

    @Column("int")
    cuenta: number

    @Column({
        type: "enum",
        enum: ["DB", "CR"],
        default: TipoMovimiento.DEBITO
    })
    tipoMovimiento: TipoMovimiento

    @CreateDateColumn({type: "timestamptz"})
    fechaAsiento: string

    @Column("money")
    montoAsiento: number

    @Column("char")
    estado: string
}