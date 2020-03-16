import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

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

}
