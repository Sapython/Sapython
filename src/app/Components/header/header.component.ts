import { Component, OnInit} from '@angular/core';
import { ToastService } from 'src/app/commonServices/toastService/toast.service';
import { DataProvider } from 'src/app/providers/data.provider';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  a:any=""
  toggleNotification:boolean=false;
  constructor(public  toastService: ToastService,public dataProvider:DataProvider) { }
  toggleNotificationFunction(){
    this.toggleNotification=!this.toggleNotification;
    if (this.toggleNotification) {
      this.toastService.presentToast("Notifications enabled",1000);
    } else {
      this.toastService.presentToast("Notifications disabled",1000);
    }
  }
  ngOnInit(): void {
  }

}
