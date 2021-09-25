import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Imagens' })
export class Imagens {
  @PrimaryGeneratedColumn()
  idImagens: number;

  @Column({ length: 255 })
  imagem_principal: string;
  
  @Column({ length: 255 })
  imagem_dois: string;
  
  @Column({ length: 255 })
  imagem_tres: string;
  
  @Column({ length: 255 })
  imagem_quatro: string;
  
}