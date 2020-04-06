import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FindOneParams } from './dto/findoneparams.dto';
import { ContactsService } from './contacts.service';
import { Contact, ContactResponse } from './interfaces/contact.interface';
import { SanitizeCreateContact } from './pipes/sanitize.create-contact.pipe';
import { SanitizeUpdateContact } from './pipes/sanitize.update-contact.pipe';

@Controller('api/contacts')
export class ContactsController {
  constructor(private readonly CscService: ContactsService) {}

  @Get('/id/:id')
  async getContactById(@Param('id') id: number): Promise<Contact> {
    return await this.CscService.getContactById(id);
  }

  @Get('/search/:search?')
  async getContactsBySearch(
    @Param('search') search?: string,
  ): Promise<Contact[]> {
    return await this.CscService.getContactsBySearch(search);
  }

  @Get('/:offset?')
  async getContactsDefault(
    @Param('offset') offset?: number,
  ): Promise<Contact[]> {
    return await this.CscService.getContactsDefault(offset);
  }

  @Post()
  async createContact(
    @Body(SanitizeCreateContact) NewContact: CreateContactDto,
  ): Promise<ContactResponse> {
    return {
      message: 'you have sent this',
      data: await this.CscService.createContact(NewContact),
    };
  }

  @Put()
  async updateContactById(
    @Body(SanitizeUpdateContact) UpdatedContact: UpdateContactDto,
  ): Promise<{ old: Contact; new: Contact }> {
    return await this.CscService.updateContact(UpdatedContact);
  }

  @Delete(':id')
  async deleteContactById(@Param() params: FindOneParams): Promise<string> {
    await this.CscService.deleteContactById(params.id);
    return `you have deleted id: ${params.id}`;
  }
}
