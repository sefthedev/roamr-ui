import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from '@modules/home/page';
import { UiModule } from '@shared/ui';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule
  ]
})
export class HomeModule { }
