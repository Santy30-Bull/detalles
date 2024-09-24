import { Module } from '@nestjs/common';
import { DetallesService } from './detalles.service';
import { DetallesController } from './detalles.controller';

@Module({
  controllers: [DetallesController],
  providers: [DetallesService],
})
export class DetallesModule {}
