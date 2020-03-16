import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    nombre: string

    @Column("long")
    cedula: number

    @Column("long")
    limiteDeCredito: number

    @Column("char")
    estado: string
    
}
