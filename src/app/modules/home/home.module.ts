import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent , HighlightComponent, SuggestionsComponent } from '@modules/home/page';
import { UiModule } from '@shared/ui';


@NgModule({
  declarations: [LandingComponent, HighlightComponent, SuggestionsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule
  ]
})
export class HomeModule { }
