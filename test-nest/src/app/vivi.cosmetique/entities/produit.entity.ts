import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StockageProduit } from './stock.entity';
import { Vente } from './vente.entity';
import { Promotion } from './promotion.entity';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nom_produit: string;

  @Column({ nullable: false })
  prix_achat: number;

  @Column({ nullable: false })
  prix_vente: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  /* un produit aura plusieur stock set les date de stock */
  @OneToMany(() => StockageProduit, (stk) => stk.produit, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  stocks: StockageProduit[];

  @OneToMany(() => Vente, (vente) => vente.produit, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  ventes: Vente[];

  @OneToMany(() => Promotion, (promotion) => promotion.produit, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  promotions: Promotion[];
}
