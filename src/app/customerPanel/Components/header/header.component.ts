import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('nav', {static: false}) nav: any;
  // scrollAmount: number=0;
  // constructor() {
  //   setInterval(() =>{
  //     console.log(this.scrollAmount);
  //   },1000)
  //  }
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(event:any) {
  //   this.scrollAmount = window.pageYOffset;
  //   if (this.scrollAmount > 50) {
  //     this.nav.nativeElement.classList.add('scrolled');
  //   } else {
  //     this.nav.nativeElement.classList.remove('scrolled');
  //   }
  // }
  ngOnInit(): void {
  }

}
