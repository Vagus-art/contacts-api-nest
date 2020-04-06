import { IsString, Length, IsNumberString } from 'class-validator';

export class CreateContactDto {
    @IsString()
    @Length(5, 20)
    name: string;

    @IsNumberString()
    @Length(5, 20)
    phone: number;
}