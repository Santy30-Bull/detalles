import { Module } from '@nestjs/common';
import { DetallesService } from './detalles.service';
import { DetallesController } from './detalles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalle } from './entities/detalle.entity';

@Module({
  controllers: [DetallesController],
  providers: [DetallesService],
  imports: [TypeOrmModule.forFeature([Detalle])],
})
export class DetallesModule {}
