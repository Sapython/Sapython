import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    SignupRoutingModule
  ],
  providers:[
    
  ],
})
export class SignupModule { }
