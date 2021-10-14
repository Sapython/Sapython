import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  mouseSubscribe = fromEvent(document.body, 'mousemove');
  mouseClickSubscribe = fromEvent(document.body, 'mousedown');
  subscribed: Element[] = [];
  currentHover: boolean = false;
  cursor: any = '';
  innerCursor: any = '';
  morphBorder(element: HTMLElement) {}
  ngOnInit(): void {
    this.cursor = document.getElementById('cursor') as HTMLElement;
    this.innerCursor = document.getElementById('cursor-inner') as HTMLElement;
    let cursorClickAnimation = document.getElementById(
      'cursorClickAnimation'
    ) as HTMLElement;
    this.mouseSubscribe.subscribe((e: any) => {
      // console.log(e.pageX, e.pageY)
      if (!this.currentHover) {
        this.cursor.style.left = +e.pageX - 25 + 'px';
        this.cursor.style.top = +e.pageY - 25 + 'px';
      }
      this.innerCursor.style.left = +e.pageX - 5 + 'px';
      this.innerCursor.style.top = +e.pageY - 5 + 'px';
    });
    this.mouseClickSubscribe.subscribe((e: any) => {
      cursorClickAnimation.style.display = 'block';
      cursorClickAnimation.style.animation =
        'cursorClickAnim 0.5s linear forwards';
      cursorClickAnimation.style.left = +e.pageX - 25 + 'px';
      cursorClickAnimation.style.top = +e.pageY - 25 + 'px';
      setTimeout(() => {
        cursorClickAnimation.style.display = 'none';
      }, 500);
    });
    this.clearEvents();
    this.ngAfterContentInit();
  }
  startMorphCursor(element:any): void {
    this.cursor.style.transition = 'all 0.5s ease';
    this.currentHover = true;
    if (element.classList.contains('mv-fxd')){
      this.cursor.style.position = "fixed";
      this.innerCursor.style.position = "fixed";
    } else {
      this.cursor.style.position = "absolute";
      this.innerCursor.style.position = "absolute";
    }
    this.cursor.style.left = +element.offsetLeft + 'px';
    this.cursor.style.top = +element.offsetTop + 'px';
    this.cursor.style.borderRadius = '5px';
    this.cursor.style.width = element.offsetWidth + 'px';
    this.cursor.style.height = element.offsetHeight + 'px';
    this.innerCursor.style.transition = 'all 0.5s ease';
    this.innerCursor.style.scale = '0.5';
  }
  stopMorphCursor(){
    this.innerCursor.style.position = "absolute";
    this.cursor.style.position = "absolute";
    // console.log("Leaving",currentElement);
    this.currentHover = false;
    this.cursor.style.transition = 'all 0.1s ease';
    // console.log(currentElement);
    this.cursor.style.borderRadius = '50%';
    this.cursor.style.width = '50px';
    this.cursor.style.height = '50px';
    this.innerCursor.style.scale = '1';
    this.innerCursor.style.transition = 'none';
  }
  clearEvents():void {
    this.cursor.style.borderRadius = '50%';
    this.cursor.style.width = '50px';
    this.cursor.style.height = '50px';
    this.innerCursor.style.transition = 'none';
    this.innerCursor.style.scale = '1';
    this.currentHover = false;
    this.subscribed.forEach((element:any)=>{
      element.removeEventListener('mouseenter',this.startMorphCursor);
      element.removeEventListener('mouseleave',this.stopMorphCursor);
    })
    this.subscribed = [];
  }
  setCursor() {
    this.clearEvents();
    this.ngAfterContentInit();
  }
  ngAfterContentInit(): void {
    let a = setInterval(() => {
      document.querySelectorAll('.mv').forEach((element: any) => {
        // console.log(element);
        if (!this.subscribed.includes(element)) {
          element.addEventListener('mouseenter', () => {
            this.startMorphCursor(element);
          });
          element.addEventListener('mouseleave',() => {
            this.stopMorphCursor();
          });
          this.subscribed.push(element);
        }
      });
    }, 500);
    setTimeout(() => {
      clearInterval(a);
    }, 5000);
  }
  title = 'Sapython';
  ngOnDestroy(): void {
    console.log('Destroying');
    alert('Destroying');
  }
}
