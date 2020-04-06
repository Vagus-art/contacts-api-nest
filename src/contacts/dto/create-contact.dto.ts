import { IsString, Length, IsInt } from 'class-validator';
import { IntLength } from '../../customValidators/IntLenght.validator';

export class CreateContactDto {
    @IsString()
    @Length(5, 20)
    name: string;

    @IsInt()
    @IntLength(5, 20)
    phone: number;
}