import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contacts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([ContactsRepository])],
    controllers:[ContactsController],
    providers:[ContactsService]
})
export class ContactsModule {}
