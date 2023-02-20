import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PdfComponent } from './components/pdf/pdf.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PdfComponent],
})
export class SharedModule {}
