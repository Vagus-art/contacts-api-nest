import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';
import { DeleteResult, UpdateResult } from 'typeorm';

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

  async updateContact(
    UpdatedContact: UpdateContactDto,
  ): Promise<{ old: Contact; new: Contact }> {
    const OldContact = await this.getContactById(UpdatedContact.id);
    if (OldContact) {
      await this.contactsRepository.updateContact(UpdatedContact);
      return { old: OldContact, new: UpdatedContact };
    } else {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
  }

  deleteContactById(id: number): Promise<DeleteResult> {
    return this.contactsRepository.deleteContactById(id);
  }
}
