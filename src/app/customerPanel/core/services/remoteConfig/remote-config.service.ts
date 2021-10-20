import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/remote-config';
import { ConService } from '../con/con.service';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {
  constructor(private error:ErrorHandlerService,private console:ConService) { 
    this.remoteConfig = firebase.remoteConfig();
    this.remoteConfig.settings.minimumFetchIntervalMillis = 5000;
    this.setDefaults();
  }
  private remoteConfig: firebase.remoteConfig.RemoteConfig;
  public getRemoteConfigByKey(key: string){
    return this.remoteConfig.fetchAndActivate().then((val:boolean) => {
      const value = this.remoteConfig.getString(key);
      this.console.log('Remote Config key',key,'value',value);
      this.console.log('Remote Config key',key,'value',this.remoteConfig.getBoolean(key));
      return value;
    }).catch((error) => {
      this.error.handle(error);
    });
  }
  getProduct(){
    console.log('getProduct');
    console.log('Config Data ',this.remoteConfig.getBoolean('projects'));
  }
  setDefaults(){
    this.remoteConfig.defaultConfig = {
      projects: true,
    };
  }
}
export enum RemoteConfigEnum {
  projects = 'projects',
}