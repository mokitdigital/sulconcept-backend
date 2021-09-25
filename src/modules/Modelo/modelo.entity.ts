import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Modelo' })
export class Modelo {
  @PrimaryGeneratedColumn()
  idModelo: number;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 100 })
  descricao: string;
}