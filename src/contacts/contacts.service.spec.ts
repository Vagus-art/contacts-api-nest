import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contacts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[TypeOrmModule.forFeature([ContactsRepository])],
      providers: [ContactsService],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should search', () => {
    expect(
      service.getContactsBySearch('')
    ).toBeTruthy();
  });

  it('should get contacts with null', () => {
    expect(
      service.getContactsDefault(null)
    ).toBeTruthy();
  });

  it('should get contacts with offset', () => {
    expect(
      service.getContactsDefault(1)
    ).toBeTruthy();
  });
});
