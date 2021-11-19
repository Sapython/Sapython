import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';
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
    private console:ConService,
    public authService:AuthorizationService,
    ) {}
  colors = [[255, 60, 125],[60, 60, 255],[60, 161, 255],[247, 182, 40],[255, 98, 84],[114, 33, 255],[77, 255, 249],[92, 255, 168]]
  ngOnInit():void {
    // this.rc.getRemoteConfigByKey(RemoteConfigEnum.projects).then((res:any)=>{
    //   this.console.log(res);
    // });
    this.startBackgroundAnimation();
  }
  private startBackgroundAnimation(){
    let bubbleContainer = document.querySelector('.bubbleContainer');
    for (let i = 0; i < this.getRandomInt(5,10); i++){
      bubbleContainer?.appendChild(this.createBubble());
    }
  }
  private createBubble():HTMLElement{
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    const size = this.getRandomInt(100,200) + 'px';
    bubble.style.width == size;
    bubble.style.width == size;
    bubble.style.left = this.getRandomInt(0, 100) + 'vw';
    bubble.style.top = this.getRandomInt(0, 60) + 'vh';
    bubble.style.animationDelay = this.getRandomInt(0, 9) + 's';
    bubble.style.background = this.getRandomColor();
    return bubble;
  }
  private getRandomInt(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private getRandomColor():string{
    const color = this.colors[this.getRandomInt(0,2)];
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
  }
  public getProjects(){
    return this.dataService.getProjects();
  }
}

