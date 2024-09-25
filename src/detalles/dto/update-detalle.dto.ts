import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleDto } from './create-detalle.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateDetalleDto extends PartialType(CreateDetalleDto) {
    @IsNumber()
    @IsPositive()
    id: number;
}
