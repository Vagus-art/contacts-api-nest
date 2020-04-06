import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsEntity } from './entities/contacts.entity';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  getContactsDefault(offset: number | undefined): Promise<Contact[]> {
    if (!offset) {
      offset = 0;
    }
    return this.contactsRepository
      .createQueryBuilder('contact')
      .limit(10)
      .orderBy('name')
      .offset(offset * 10)
      .getMany();
  }

  getContactById(id: number): Promise<Contact> {
    return this.contactsRepository.findOne(id);
  }

  getContactsBySearch(search?: string | undefined): Promise<Contact[]> {
    if (!search) {
      search = '';
    }
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

  deleteContactById(id: number): Promise<Contact> {
    return this.contactsRepository.findOne(id);
  }
}
