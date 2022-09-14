import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoNivelAComponent } from './segundo-nivel-a.component';
import { TerceiroNivelAComponent } from './terceiro-nivel-a/terceiro-nivel-a.component';
import { TerceiroNivelBComponent } from './terceiro-nivel-b/terceiro-nivel-b.component';



@NgModule({
  declarations: [
    SegundoNivelAComponent,
    TerceiroNivelAComponent,
    TerceiroNivelBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SegundoNivelAComponent,
    TerceiroNivelAComponent,
    TerceiroNivelBComponent
  ]
})
export class SegundoNivelAModule { }
