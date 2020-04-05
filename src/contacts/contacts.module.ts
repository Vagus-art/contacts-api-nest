import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsEntity } from './entities/contacts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([ContactsEntity])],
    controllers:[ContactsController],
    providers:[ContactsService]
})
export class ContactsModule {}
