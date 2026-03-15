import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import {TypeOrmModule} from '@nestjs/typeorm'
import { max } from 'rxjs';

@Global()
@Module({
    
  imports: [
   TypeOrmModule.forRootAsync( {
      //provide: 'PG_POOL',
      imports:[ConfigModule],
      inject: [ConfigService],

      useFactory: (config: ConfigService) => {
        console.log("-------",config.get('DATABASE_HOST'),config.get<string>('NODE_ENV')==="dev")
        return {
        type:"postgres",
          host: config.get<string>('DATABASE_HOST'),
          port: config.get<number>('DATABASE_PORT'),
          username: config.get<string>('DATABASE_USER'),
          password: config.get('DATABASE_PASSWORD'),
          database: config.get<string>('DATABASE2_NAME'),
          autoLoadEntities:true,
          extra:{
            max:20,
          },
          synchronize:config.get<string>('NODE_ENV')==="dev",
        }

      },
      
    })
  ],
  
  
})
export class DatabaseModule {}