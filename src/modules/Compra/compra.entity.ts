import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Compra' })
export class Compra {
  @PrimaryGeneratedColumn()
  idCompra: number;

  @Column()
  numero: number;
  
  @Column()
  valor: number;
  
  @Column({ length: 45 })
  metodo_pagamento: string;
  
  @Column({ length: 255 })
  endereco: string;

  @Column({ length: 45 })
  cidade: string;

  @Column({ length: 45 })
  estado: string;

  @Column({ length: 9 })
  cep: string;

  @Column()
  valor_frete: number;

  @Column({ length: 1000 })
  url_nota_fiscal: string
  
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