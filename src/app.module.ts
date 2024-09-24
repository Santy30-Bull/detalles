import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetallesModule } from './detalles/detalles.module';
import { DetallesModule } from './detalles/detalles.module';

@Module({
  imports: [DetallesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
