import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produit } from './produit.entity';
import { Client } from './client.entity';
import { Fournisseur } from './fournisseur.entity';
import { Utilisateur } from './utilisateur.entity';
import { Unite } from './unite.entity';

@Entity()
export class StockageProduit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  date_stock: Date;

  @Column({ nullable: false, default: 0 })
  quantite_stock: number;

  @Column({ nullable: false, default: 0 })
  quantite_min_stock: number;

  @Column({ nullable: false, default: 0 })
  prix_unitaire_achat: number;

  @Column({ nullable: true, default: 0 })
  autre_frais: number;

  @Column({ nullable: true, default: 0 })
  observation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /* relation plusieur stock d'un produit */
  @ManyToOne(() => Produit, (prod) => prod.stocks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  produit: Produit;

  @ManyToOne(() => Client, (client) => client.stocks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  client: Client;

  @ManyToOne(() => Fournisseur, (fournisseur) => fournisseur.stocks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  fournisseur: Fournisseur;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.stocks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  utilisateur: Utilisateur;

  @ManyToOne(() => Unite, (unite) => unite.stocks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  unite: Unite;
}
