import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ComponentsModule } from '../../../Components/components.module';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
