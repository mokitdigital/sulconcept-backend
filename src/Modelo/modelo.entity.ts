import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Modelo' })
export class Modelo {
  @PrimaryGeneratedColumn()
  idModelo: number;
}