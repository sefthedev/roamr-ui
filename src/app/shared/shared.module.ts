import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@ui';



@NgModule({
  declarations: [],
  exports: [UiModule],
  imports: [CommonModule, UiModule]
})
export class SharedModule { }
