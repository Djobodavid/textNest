import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StockageProduit } from "./stock.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nom: string;

  @Column({ nullable: false })
  addresse: string;

  @Column({ nullable: false })
  telephone: string;


  @OneToMany(() => StockageProduit, (stk) => stk.client, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    })
    stocks: StockageProduit[];
}