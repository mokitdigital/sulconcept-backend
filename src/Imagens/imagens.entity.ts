import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Imagens' })
export class Imagens {
  @PrimaryGeneratedColumn()
  idImagens: number;
}