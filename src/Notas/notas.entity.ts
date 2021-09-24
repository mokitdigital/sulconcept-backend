import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Notas' })
export class Notas {
  @PrimaryGeneratedColumn()
  idNotas: number;
}