import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NavbarComponent,
  DestinationBoxComponent,
  ButtonComponent,
  SearchInputComponent,
  FooterComponent,
} from '@shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    SearchInputComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    SearchInputComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UiModule {}
