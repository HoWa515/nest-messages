import { IsString } from 'class-validator'; // npm package
export class CreateMessageDto {
  @IsString()
  content: string;
}
