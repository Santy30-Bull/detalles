import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DetallesService } from './detalles.service';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('detalles')
export class DetallesController {
  constructor(private readonly detallesService: DetallesService) {}

  @MessagePattern({cmd: 'create-detalle'})
  create(@Payload() createDetalleDto: CreateDetalleDto) {
    return this.detallesService.create(createDetalleDto);
  }

  @MessagePattern({cmd: 'find-all-detalles'})
  findAll() {
    return this.detallesService.findAll();
  }

  @MessagePattern({cmd: 'find-one-detalle'})
  findOne(@Payload('id',ParseIntPipe) id: string) {
    return this.detallesService.findOne(+id);
  }

  @MessagePattern({cmd: 'update-detalle'})
  update(@Payload() updateDetalleDto: UpdateDetalleDto) {
    return this.detallesService.update(updateDetalleDto.id, updateDetalleDto);
  }

  @MessagePattern({cmd: 'remove-detalle'})
  remove(@Payload('id',ParseIntPipe) id: string) {
    return this.detallesService.remove(+id);
  }
}
