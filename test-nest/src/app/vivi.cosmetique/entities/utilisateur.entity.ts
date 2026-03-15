import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StockageProduit } from './stock.entity';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nom: string;

  @Column({ nullable: false })
  prenom: string;

  @Column({ nullable: false })
  telephone: string;

  @Column({ nullable: false })
  role: string;

  @Column({ nullable: false })
  mot_pass: string;

  @Column({ unique:true })
  email: string;

  @OneToMany(() => StockageProduit, (stk) => stk.utilisateur, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
      stocks: StockageProduit[];
}
