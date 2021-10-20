import { Component, OnInit } from '@angular/core';
import { ConService } from '../../core/services/con/con.service';
import { DatabaseService } from '../../core/services/database/database.service';
import { RemoteConfigEnum, RemoteConfigService } from '../../core/services/remoteConfig/remote-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dataService:DatabaseService,
    private rc:RemoteConfigService, // TODO: This code is the error
    private console:ConService
    ) {}

  ngOnInit():void {
    // this.rc.getRemoteConfigByKey(RemoteConfigEnum.projects).then((res:any)=>{
    //   this.console.log(res);
    // });
  }
}
