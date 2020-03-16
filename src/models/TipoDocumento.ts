import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class TipoDocumento {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    descripcion: string

    @Column("int")
    cuentaContable: number

    @Column("char")
    estado: string

}
