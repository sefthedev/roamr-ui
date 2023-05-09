import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components';



@NgModule({
  declarations: [],
  exports: [ComponentsModule],
  imports: [CommonModule, ComponentsModule]
})
export class CoreModule { }
