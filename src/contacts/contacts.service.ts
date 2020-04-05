import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsEntity } from './contacts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsEntity)
    private contactsRepository: Repository<ContactsEntity>,
  ) {}

  getContactsDefault(offset: number): Promise<ContactsEntity[]> {
    return this.contactsRepository
      .createQueryBuilder('contact')
      .limit(10)
      .orderBy('name')
      .offset(offset * 10)
      .getMany();
  }

  getContactById(id: number): Promise<ContactsEntity> {
    return this.contactsRepository.findOne(id);
  }

  getContactsBySearch(search?: string): Promise<ContactsEntity[]> {
    return this.contactsRepository
      .createQueryBuilder('contact')
      .where('contact.name ilike :name', { name: '%' + search + '%' })
      .limit(10)
      .getMany();
  }

  createContact(NewContact: CreateContactDto): Contact {
    return {
      ...NewContact,
      id: 13123,
    };
  }

  updateContactById(UpdatedContact: CreateContactDto, id: number): Contact {
    return {
      ...UpdatedContact,
    };
  }

  deleteContactById(id: number): Promise<ContactsEntity> {
    return this.contactsRepository.findOne(id);
  }
}
