import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar';
import { DestinationBoxComponent } from './destination-box/destination-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { HighlightComponent } from './highlight/highlight.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    HighlightComponent,
    SearchInputComponent,
    SuggestionsComponent,
  ],
  exports: [
    NavbarComponent,
    DestinationBoxComponent,
    ButtonComponent,
    HighlightComponent,
    SearchInputComponent,
    SuggestionsComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UiModule {}
