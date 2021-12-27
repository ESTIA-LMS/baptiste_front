import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormationsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
