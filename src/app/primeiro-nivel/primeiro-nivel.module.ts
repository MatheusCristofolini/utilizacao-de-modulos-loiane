import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroNivelComponent } from './primeiro-nivel.component';
import { SegundoNivelAModule } from './segundo-nivel-a/segundo-nivel-a.module';
import { SegundoNivelBComponent } from './segundo-nivel-b/segundo-nivel-b.component';


@NgModule({
  declarations: [
    PrimeiroNivelComponent,
    SegundoNivelBComponent,
    SegundoNivelBComponent
  ],
  imports: [
    CommonModule,
    SegundoNivelAModule
  ],
  exports: [
    PrimeiroNivelComponent,
    SegundoNivelBComponent
   ]
})
export class PrimeiroNivelModule { }
