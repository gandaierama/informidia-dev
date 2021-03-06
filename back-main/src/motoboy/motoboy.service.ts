import { Injectable } from '@nestjs/common';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { MotoboyEntity } from './entities/motoboy.entity';

@Injectable()
export class MotoboyService {
  create(createMotoboyDto: CreateMotoboyDto) {
    return 'This action adds a new motoboy';
  }

  findAll() {
    return `This action returns all motoboy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} motoboy`;
  }

  update(id: number, updateMotoboyDto: UpdateMotoboyDto) {
    return `This action updates a #${id} motoboy`;
  }

  remove(id: number) {
    return `This action removes a #${id} motoboy`;
  }
}
