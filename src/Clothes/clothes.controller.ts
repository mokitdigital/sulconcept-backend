import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateClothesDto } from './dto/create-clothes.dto';
import { ClothesService } from './clothes.service';
import { Clothes } from './clothes.interface';

@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Post()
  async create(@Body() createClothesDto: CreateClothesDto) {
    this.clothesService.create(createClothesDto);
  }

  @Get()
  async findAll(): Promise<Clothes[]> {
    return this.clothesService.findAll();
  }
}
