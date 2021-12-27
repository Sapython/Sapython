import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ComponentsModule } from 'src/app/Components/components.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
