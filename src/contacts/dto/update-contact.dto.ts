import { IsString, Length, IsNumberString, IsInt } from 'class-validator';

export class UpdateContactDto {
  @IsInt()
  id: number;

  @IsString()
  @Length(5, 20)
  name: string;

  @IsNumberString()
  @Length(5, 20)
  phone: number;
}
