import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { StockageProduit } from './stock.entity';
import { Vente } from './vente.entity';

@Entity()
export class Unite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  unite: string;

  @CreateDateColumn()
    createdAt: Date;


  @OneToMany(() => StockageProduit, (stk) => stk.unite, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  stocks: StockageProduit[];

  @OneToMany(() => Vente, (vente) => vente.unite, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  ventes: Vente[];
}
