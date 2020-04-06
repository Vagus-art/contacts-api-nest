import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  getContactsDefault(offset: number | undefined): Promise<Contact[]> {
    if (!offset) {
      offset = 0;
    }
    return this.contactsRepository.getContactsDefault(offset);
  }

  getContactById(id: number): Promise<Contact> {
    return this.contactsRepository.getContactById(id);
  }

  getContactsBySearch(search?: string | undefined): Promise<Contact[]> {
    if (!search) {
      search = '';
    }
    return this.contactsRepository.getContactsBySearch(search);
  }

  createContact(NewContact: CreateContactDto): Promise<Contact> {
    return this.contactsRepository.createContact(NewContact);
  }

  updateContactById(UpdatedContact: CreateContactDto, id: number): Contact {
    return {
      ...UpdatedContact,
      id
    };
  }

  deleteContactById(id: number): Promise<Contact> {
    return this.contactsRepository.deleteContactById(id);
  }
}
