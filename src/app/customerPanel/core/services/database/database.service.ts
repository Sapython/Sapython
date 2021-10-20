import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
import firebase from 'firebase/app';
import { AngularFireAnalytics } from '@angular/fire/analytics';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private errorHandler: ErrorHandlerService,
  ) {}
  
}
