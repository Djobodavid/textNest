import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Produit } from './produit.entity';
import { Unite } from './unite.entity';

@Entity()
export class Vente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  date_vente: Date;

  @Column({ nullable: false, default: 0 })
  quantite_vendu: number;

  @Column({ nullable: false, default: 0 })
  prix_unitaire_vente: number;

  @Column({ nullable: true, default: 0 })
  autre_frais: number;

  @Column({ nullable: true, default: 0 })
  observation: string;

  @ManyToOne(() => Produit, (prod) => prod.ventes, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  produit: Produit;

  @ManyToOne(() => Unite, (unite) => unite.ventes, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  unite: Unite;
}
