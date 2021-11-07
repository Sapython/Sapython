import { Injectable } from '@angular/core';
import { RemoteConfig } from '@angular/fire/remote-config';
import { ConService } from '../con/con.service';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {
  constructor(
    private error:ErrorHandlerService,
    private console:ConService,
    private remoteConfig: RemoteConfig,
    ) { }
  
  // getRemoteConfigByKey(key:string):any{
  //   this.remoteConfig;
  // }

}
export enum RemoteConfigEnum {
  projects = 'projects',
}