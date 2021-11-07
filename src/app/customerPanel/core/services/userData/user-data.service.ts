import { Injectable } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private firestore: Firestore) { }
  addNewUser(): void {
    console.log('addNewUser',this.firestore);
    const userDoc = doc(this.firestore, 'users/user1');
    console.log(userDoc);
    setDoc(userDoc, {'Alpha':'beta'}).then(() => {
      console.log('Document successfully written!');
    }).catch(() => {
      console.log('Error writing document');
    });
  }
}
