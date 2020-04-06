import { EntityRepository, Repository } from 'typeorm';
import { ContactsEntity } from '../entities/contacts.entity';
import { Contact } from '../interfaces/contact.interface';
import { CreateContactDto } from '../dto/create-contact.dto';

@EntityRepository(ContactsEntity)
export class ContactsRepository extends Repository<ContactsEntity> {
  getContactsDefault(offset: number): Promise<Contact[]> {
    return this.createQueryBuilder('contact')
      .limit(10)
      .orderBy('name')
      .offset(offset * 10)
      .getMany();
  }

  getContactById(id: number): Promise<Contact> {
    return this.findOne(id);
  }

  getContactsBySearch(search: string): Promise<Contact[]> {
    return this.createQueryBuilder('contact')
      .where('contact.name ilike :name', { name: '%' + search + '%' })
      .limit(10)
      .getMany();
  }

  createContact(NewContact: CreateContactDto): Promise<Contact> {
    return this.save(NewContact);
  }

  deleteContactById(id: number): Promise<Contact> {
    return this.findOne(id);
  }
}
