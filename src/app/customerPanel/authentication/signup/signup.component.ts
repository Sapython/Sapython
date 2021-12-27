import { Component, OnInit } from '@angular/core';
import { AuthencationService } from 'src/app/services/authencation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { DataProvider } from 'src/app/providers/data.provider';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide:boolean =  false;
  fullNameControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)])
  emailControl:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)])
  confirmPasswordControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)])
  signupForm:FormGroup = new FormGroup({
    fullName: this.fullNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    confirmPassword:this.confirmPasswordControl,
  });
  constructor(public authService:AuthencationService,public alertify:AlertsAndNotificationsService,public dataProvider:DataProvider) { }

  ngOnInit(): void {
  }
  signup():void{
    console.log(this.signupForm,this.confirmPasswordControl);
    if (this.signupForm.status === 'VALID'){
      if (this.signupForm.value.password === this.signupForm.value.confirmPassword){
        console.log(this.signupForm.value)
        this.authService.signUpWithEmailAndPassword(this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.fullName)
      } else {
        this.alertify.presentToast("Password and Confirm Password do not match",'error',3000);
      }
    } else {
      this.alertify.presentToast('Please fill all the fields correctly','error',3000);
    }
  }
}
