import { Injectable } from '@angular/core';
import { User, UserCredential } from '@angular/fire/auth';
import { Firestore, addDoc, collectionData,DocumentReference, CollectionReference , collection , setDoc, doc, updateDoc, deleteDoc, docSnapshots, docData, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { documentId } from 'firebase/firestore';
import { DataProvider } from '../providers/data.provider';
import { ExtraLoginEmailInfo, ExtraLoginGoogleInfo } from '../structures/method.structure';
import { UserData } from '../structures/user.structure';
import { AlertsAndNotificationsService } from './uiService/alerts-and-notifications.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersDoc:CollectionReference;
  userDoc:DocumentReference| undefined;
  constructor(private firestore: Firestore,private router:Router ,private alertify:AlertsAndNotificationsService, private dataProvider:DataProvider) {
    this.usersDoc = collection(this.firestore,'users');
  }
  public async setGoogleUserData(user:User,userData:ExtraLoginGoogleInfo){
    this.dataProvider.pageSetting.blur = true;
    this.dataProvider.pageSetting.lastRedirect = '';
    let data:UserData = {
      userId: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL ||  this.getRandomImage(),
      phoneNumber: userData.phoneNumber,
      emailVerified:true,
      firstLogin:false,
      access: {
        access: 'User',
      },
      orders:[],
      totalOrders:0,
      totalCashback:0,
      wishlist:[],
      cart:[],
      friends:[],
    }
    this.userDoc  = doc(this.firestore,'users/'+user.uid);
    await setDoc(this.userDoc,data).then(()=>{
      this.alertify.presentToast('User data set successfully')
    });
    this.dataProvider.pageSetting.blur = false;
    this.router.navigate([''])
  }
  public async setEmailUserData(user:User,userData:ExtraLoginEmailInfo){
    this.dataProvider.pageSetting.blur = true;
    this.dataProvider.pageSetting.lastRedirect = '';
    let data:UserData = {
      userId: user.uid,
      email: user.email || '',
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || this.getRandomImage(),
      phoneNumber: userData.phoneNumber || '',
      emailVerified:true,
      firstLogin:false,
      access: {
        access: 'User',
      },
      orders:[],
      totalOrders:0,
      totalCashback:0,
      wishlist:[],
      cart:[],
      friends:[],
    }
    this.userDoc  = doc(this.firestore,'users/'+user.uid);
    await setDoc(this.userDoc,data).then(()=>{
      this.alertify.presentToast('User data set successfully')
    });
    this.dataProvider.pageSetting.blur = false;
    this.router.navigate([''])
  }
  getRandomImage():string{
    return 'https://avatars.dicebear.com/api/gridy/' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '.svg';
  }
}
