import { DataProvider } from './../../../providers/data.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthencationService } from 'src/app/services/authencation.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { EmailBasedDialogComponent } from 'src/app/models/login/email-based-dialog/email-based-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    LoginComponent,
    EmailBasedDialogComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    LoginRoutingModule,
    RouterModule,
  ],
  providers:[
    AuthencationService,
    UserDataService,
    DataProvider,
    DatabaseService,
    AlertsAndNotificationsService,
  ]
})
export class LoginModule { }
