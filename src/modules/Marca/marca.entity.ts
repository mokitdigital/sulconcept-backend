import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Marca' })
export class Marca {
  @PrimaryGeneratedColumn()
  idMarca: number;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 100 })
  descricao: string;

  @Column({ length: 255 })
  imagem: string;
}
