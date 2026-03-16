import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StockageProduit } from "./stock.entity";
import { Vente } from "./vente.entity";

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

  @CreateDateColumn()
    createdAt: Date;


  @OneToMany(() => Vente, (vente) => vente.client, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    })
    ventes: Vente[];
}