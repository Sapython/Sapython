import { Injectable } from '@angular/core';
import { Auth, signInAnonymously } from '@angular/fire/auth';
import { UserDataService } from '../userData/user-data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private auth:Auth,private userData:UserDataService) {
    console.log('AuthorizationService',auth.name);
   }
   loginAnonymously(){
    this.userData.addNewUser();
    // signInAnonymously(this.auth).then(credential=>{
    //   console.log('signInAnonymously',credential);
      
    //   console.log('add new user')
    // });
   }

}
