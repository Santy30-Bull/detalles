import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional, Min, IsUUID } from "class-validator";

export class CreateDetalleDto {
    @IsUUID()
    public productoId: string;

    @IsNumber()
    @Min(1)
    @Type(() => Number)
    public cantidad: number;

    @IsNumber()
    @Min(0)
    @Type(() => Number)
    public precioUnitario: number;

    @IsNumber()
    @Min(0)
    @Type(() => Number)
    public precioTotal: number;

    @IsUUID()
    @IsOptional()
    public compraId?: string;

    @IsString()
    @IsOptional()
    public nombre?: string;

    @IsString()
    @IsOptional()
    public descripcion?: string;

    @IsString()
    @IsOptional()
    public categoria?: string;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    public descuento?: number;
}
