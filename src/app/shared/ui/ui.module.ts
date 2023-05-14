import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar';
import { DestinationBoxComponent } from './destination-box/destination-box.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { HighlightComponent } from './highlight/highlight.component';
import { SearchInputComponent } from './search-input/search-input.component';



@NgModule({
  declarations: [NavbarComponent, DestinationBoxComponent, ButtonComponent, HighlightComponent, SearchInputComponent],
  exports: [NavbarComponent, DestinationBoxComponent, ButtonComponent, HighlightComponent, SearchInputComponent],
  imports: [CommonModule, RouterModule, FormsModule ]
})
export class UiModule { }
