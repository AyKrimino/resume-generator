import { Injectable } from '@nestjs/common';
import { PdfDto } from './dto/pdf.dto';
import puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generatePdf(pdfDto: PdfDto) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(pdfDto.htmlContent, {
      waitUntil: 'domcontentloaded',
    });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '1in',
        right: '1in',
        bottom: '1in',
        left: '1in',
      },
    });

    await browser.close();
    return pdfBuffer;
  }
}
