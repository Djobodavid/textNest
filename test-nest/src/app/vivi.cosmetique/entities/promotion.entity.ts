import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Produit } from './produit.entity';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reduction: number; // ex: 10%

  @Column()
  type_reduction: string; // pourcentage ou montant

  @Column()
  date_debut: Date;

  @Column()
  date_fin: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Produit, (prod) => prod.promotions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  produit: Produit;
}
