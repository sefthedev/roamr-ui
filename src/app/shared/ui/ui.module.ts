import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar';
import { DestinationBoxComponent } from './destination-box/destination-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    SearchInputComponent,
  ],
  exports: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    SearchInputComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UiModule {}
