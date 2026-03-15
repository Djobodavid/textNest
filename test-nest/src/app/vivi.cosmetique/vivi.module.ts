import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produit } from "./entities/produit.entity";
import { StockageProduit } from "./entities/stock.entity";
import { Vente } from "./entities/vente.entity";
import { Category } from "./entities/category.entity";
import { Client } from "./entities/client.entity";
import { Fournisseur } from "./entities/fournisseur.entity";
import { Unite } from "./entities/unite.entity";
import { Utilisateur } from "./entities/utilisateur.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Produit,
            StockageProduit,
            Vente,
            Category,
            Client,
            Fournisseur,
            Unite,
            Utilisateur,
            Vente
        ])
    ]

})
export class ViviModule{}