import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateContactDto } from '../dto/create-contact.dto';
import { trim, escape } from 'validator';

@Injectable()
export class SanitizeCreateContact implements PipeTransform {
  transform(value: CreateContactDto) : CreateContactDto {
    return {
        name: trim(escape(value.name)),
        phone: value.phone
    };
  }
}
