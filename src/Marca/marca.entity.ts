import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Marca' })
export class Marca {
  @PrimaryGeneratedColumn()
  idMarca: number;
}
