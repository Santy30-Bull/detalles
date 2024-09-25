import { Injectable } from '@nestjs/common';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detalle } from './entities/detalle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetallesService {

  constructor(@InjectRepository(Detalle)
    private detalleRepository: Repository<Detalle>) {}

  @InjectRepository(Detalle)
  async create(createDetalleDto: CreateDetalleDto) {
    const detalle = this.detalleRepository.create(createDetalleDto);
    await this.detalleRepository.save(detalle);
    return 'This action adds a new detalle';
  }
  
  findAll() {
    return this.detalleRepository.find({});
  }

  findOne(id: number) {
    return this.detalleRepository.findOneBy({id:id});
  }

  async update(id: number, updateDetalleDto: UpdateDetalleDto) {
    const detalle = this.findOne(id);
    return `This action updates a #${id} detalle`;
  }

  remove(id: number) {
    this.detalleRepository.delete(id);
    return `This action removes a #${id} detalle`;
  }
}
