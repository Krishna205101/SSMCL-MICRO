import { Component } from '@angular/core';

@Component({
  selector: 'ssmcl-mfe-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  static download(data: any) {
    console.log(data);
  }
  constructor() {}
}
