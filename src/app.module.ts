require('dotenv').config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsEntity } from './contacts/entities/contacts.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [ContactsEntity]
  }),ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
