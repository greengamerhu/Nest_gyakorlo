import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Plushie } from './plushie/entities/plushie.entity';
import { PlushieModule } from './plushie/plushie.module';
import { Preschooler } from './preschooler/entities/preschooler.entity';
import { PreschoolerModule } from './preschooler/preschooler.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'database',
      entities: [
        Plushie, Preschooler
      ],
      synchronize: true,
    }),
    PlushieModule,
    PreschoolerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
