import { IsNotEmpty, IsString } from 'class-validator';

export class PdfDto {
  @IsString()
  @IsNotEmpty()
  htmlContent: string;
}
