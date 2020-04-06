import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
import { Contact, ContactResponse } from './interfaces/contact.interface';


@Controller('api/contacts')
export class ContactsController {

  constructor(private readonly CscService : ContactsService) {}

  @Get('/id/:id')
  async getContactById(@Param('id') id: number): Promise<Contact> {
    return await this.CscService.getContactById(id);
  }

  @Get('/search/:search?')
  async getContactsBySearch(@Param('search') search?: string): Promise<Contact[]> {
    return await this.CscService.getContactsBySearch(search);
  }

  @Get('/:offset?')
  async getContactsDefault(@Param('offset') offset?: number): Promise<Contact[]> {
    return await this.CscService.getContactsDefault(offset);
  }
  
  @Post()
  async createContact(@Body() NewContact: CreateContactDto): Promise<ContactResponse> {
    return { message: 'you have sent this', data: await this.CscService.createContact(NewContact) };
  }

  @Put(':id')
  async updateContactById(@Body() UpdatedContact: CreateContactDto, @Param('id') id: number): Promise<ContactResponse> {
    return { message: `you have updated the user : ${id}`, data: await this.CscService.updateContactById(UpdatedContact,id) };
  }

  @Delete(':id')
  async deleteContactById(@Param('id') id: number) : Promise<ContactResponse> {
      return { message: `you have updated the user : ${id}`, data: await this.CscService.deleteContactById(id) }
  }
}
