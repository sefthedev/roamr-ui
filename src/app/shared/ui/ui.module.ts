import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar';
import { DestinationBoxComponent } from './destination-box/destination-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent, DestinationBoxComponent],
  exports: [NavbarComponent, DestinationBoxComponent],
  imports: [CommonModule, RouterModule, FormsModule ]
})
export class UiModule { }
