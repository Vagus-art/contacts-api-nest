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


//mock response to delete request endpoint
const userMock : CreateContactDto = {
    name: "Michael Jordan",
    phone: 12345678
} 


@Controller('contacts')
export class ContactsController {
  @Get(':offset')
  getContactsDefault(@Param('offset') offset: number): string {
    return `this will return pages depending on offset: ${offset}`;
  }

  @Get('/id/:id')
  getContactById(@Param('id') id: number): { message: string; data: CreateContactDto } {
    return {message:`you searched for ${id}`, data:userMock};
  }

  @Get('/search/:search')
  getContactBySearch(@Param('search') search: number): string {
    return `you searched for ${search}`;
  }

  @Post()
  createContact(@Body() NewContact: CreateContactDto): { message: string; data: CreateContactDto } {
    return { message: 'you have sent this', data: NewContact };
  }

  @Put(':id')
  updateContactById(@Body() UpdatedContact: CreateContactDto, @Param('id') id: number): { message: string; data: CreateContactDto } {
    return { message: `you have sent this to update the user with id : ${id}`, data: UpdatedContact };
  }

  @Delete(':id')
  deleteContactById(@Param('id') id: number) : {message:string,deletedUser:CreateContactDto} {
      return { message: `you have deleted this user with id: ${id}`, deletedUser: userMock}
  }
}
