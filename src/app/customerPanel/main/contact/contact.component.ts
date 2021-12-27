import { Component, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  colors = [[255, 60, 125],[60, 60, 255],[60, 161, 255],[247, 182, 40],[255, 98, 84],[114, 33, 255],[77, 255, 249],[92, 255, 168]]
  constructor() { }

  ngOnInit(): void {
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
    bubble.style.left = this.getRandomInt(0, 40) + 'vw';
    bubble.style.top = this.getRandomInt(0, 100) + 'vh';
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
}
