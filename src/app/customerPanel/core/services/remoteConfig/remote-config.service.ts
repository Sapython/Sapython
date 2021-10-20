import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { ConService } from '../con/con.service';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {
  constructor(
    private error:ErrorHandlerService,
    private console:ConService,
    private remoteConfig: AngularFireRemoteConfig,
    ) { }
  // getRemoteConfigByKey(key:string):any{
  //   return this.remoteConfig.getValue(key);
  // }
}
export enum RemoteConfigEnum {
  projects = 'projects',
}