import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AuthencationService } from 'src/app/services/authencation.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean =  false;
  constructor(public authService:AuthencationService,public alertify:AlertsAndNotificationsService,public dataProvider:DataProvider) { }
  emailControl:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)])
  signinForm:FormGroup = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  ngOnInit(): void {
  }
  login():void{
    console.log(this.signinForm);
    if (this.signinForm.status === 'VALID'){
      this.authService.loginEmailPassword(this.emailControl.value,this.passwordControl.value);
    } else {
      this.alertify.presentToast('Please fill all the fields correctly','error',3000);
    }
  }
}
