import { Injectable, PipeTransform } from '@nestjs/common';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { trim, escape } from 'validator';

@Injectable()
export class SanitizeUpdateContact implements PipeTransform {
  transform(value: UpdateContactDto) : UpdateContactDto {
    return {
        name: trim(escape(value.name)),
        phone: value.phone,
        id: value.id
    };
  }
}
