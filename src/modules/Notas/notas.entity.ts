import { Produto } from 'src/modules/Produto/produto.entity';
import { Usuario } from 'src/modules/Usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'Notas' })
export class Notas {
  @PrimaryGeneratedColumn()
  idNotas: number;

  @Column({ length: 45 })
  descricao: string;

  @Column()
  valor: number;

  // Chaves Estrangeiras
  /* @OneToOne(_type => Produto)
  @JoinColumn({ name: 'idProduto' })
  idProduto: number;

  @OneToOne(_type => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  idUsuario: number; */
}