/* eslint-disable @typescript-eslint/no-unused-vars */
/* import { Imagens } from 'src/Imagens/imagens.entity';
import { Marca } from 'src/Marca/marca.entity';
import { Modelo } from 'src/Modelo/modelo.entity';
import { Notas } from 'src/Notas/notas.entity'; */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'Produto' })
export class Produto {

  @PrimaryGeneratedColumn()
  idProduto: number;

  @Column()
  codigo: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  valor: number;

  @Column({ length: 3 })
  cor: string;

  @Column({ length: 3 })
  tamanho: string;

  @Column({ length: 500 })
  informacoes: string;

  @Column({ length: 20 })
  genero: string;

  @Column({ length: 255 })
  indicado_para: string;

  @Column({ length: 255 })
  composicao: string;

  @Column()
  estoque: number;

  // Chaves estrangeiras

  /* @OneToOne(_type => Imagens)
  @JoinColumn({ name: 'idImagens' })
  idImagens: number;

  @OneToOne(_type => Modelo)
  @JoinColumn({ name: 'idModelo' })
  idModelo: number;

  @OneToOne(_type => Marca)
  @JoinColumn({ name: 'idMarca' })
  idMarca: number;

  @OneToOne(_type => Notas)
  @JoinColumn({ name: 'idNotas' })
  idNota: number; */
}
