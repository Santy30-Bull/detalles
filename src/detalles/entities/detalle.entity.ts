import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detalle {
    @PrimaryGeneratedColumn('identity')
    id: number;  // Cambié 'number' a 'string' porque el DTO usa UUID

    @Column('uuid')
    productoId: string;  // Este es un UUID que viene en el DTO

    @Column('int')
    cantidad: number;  // Coincide con el DTO

    @Column('decimal', { precision: 10, scale: 2 })
    precioUnitario: number;  // Coincide con el DTO

    @Column('decimal', { precision: 10, scale: 2 })
    precioTotal: number;  // Coincide con el DTO

    @Column('uuid', { nullable: true })
    compraId?: string;  // Este campo es opcional en el DTO

    @Column({ nullable: true })
    nombre?: string;  // Es opcional en el DTO

    @Column({ nullable: true })
    descripcion?: string;  // Es opcional en el DTO

    @Column({ nullable: true })
    categoria?: string;  // Es opcional en el DTO

    @Column('decimal', { precision: 5, scale: 2, nullable: true })
    descuento?: number;  // Es opcional en el DTO
}

// El archivo entity debe tener los mismos atributos que el DTO