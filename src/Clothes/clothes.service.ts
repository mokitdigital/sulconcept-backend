import { Injectable } from '@nestjs/common';
import { Clothes } from './clothes.interface';

@Injectable()
export class ClothesService {
  private readonly clothes: Clothes[] = [];

  create(clothing: Clothes) {
    this.clothes.push(clothing);
  }

  findAll(): Clothes[] {
    return this.clothes;
  }
}
