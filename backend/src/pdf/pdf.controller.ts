import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { PdfDto } from './dto/pdf.dto';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('generate-pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post()
  async generatePdf(@Body() pdfDto: PdfDto, @Res() res: Response) {
    try {
      const pdfBuffer = await this.pdfService.generatePdf(pdfDto);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
        'Content-Length': pdfBuffer.length,
      });

      return res.status(HttpStatus.OK).send(pdfBuffer);
    } catch (error) {
      console.log('PDF generation failed:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Failed to generate PDF' });
    }
  }
}
