import { IsString, Length, IsNumberString} from 'class-validator';

export class UpdateContactDto {
    @IsString()
    @Length(5, 20)
    name: string;

    @IsNumberString()
    @Length(5, 20)
    phone: number;

    @IsNumberString()
    id: number;
}