import {
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './customerPanel/main/home/home.component';
import { ComponentsModule } from './Components/components.module';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list'; 
import { ToastService } from './commonServices/toastService/toast.service';
import { DialogService } from './commonServices/dialogService/dialog.service';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics'; 
import { AuthencationService } from './services/authencation.service';
import { DatabaseService } from './services/database.service';
import { UserDataService } from './services/user-data.service';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DataProvider } from './providers/data.provider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MatGridListModule,
    ComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideRemoteConfig(() => getRemoteConfig()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
      const firestore = getFirestore();
      enableIndexedDbPersistence(firestore);
      return firestore;
    }),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAnalytics(() => getAnalytics()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    ToastService,
    DialogService,
    ScreenTrackingService,
    UserTrackingService,
    AuthencationService,
    DatabaseService,
    UserDataService,
    AlertsAndNotificationsService,
    DataProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
