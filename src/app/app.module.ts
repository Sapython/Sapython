import {
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Rollbar from 'rollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './customerPanel/main/home/home.component';
import { ComponentsModule } from './customerPanel/Components/components.module';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';

import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

const rollbarConfig = {
  accessToken: '190ee0d852464fc696c6356fa9de0941',
  captureUncaught: true,
  captureUnhandledRejections: true,
};
@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    provideRemoteConfig(() => getRemoteConfig()),
    AppRoutingModule,
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
    ComponentsModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
