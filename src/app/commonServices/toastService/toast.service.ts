import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  testFunction(){
    console.log("testFunction");
  }
  toastAudio = new Audio()
  playAudio(type:'toast'|''=''){
    if (type ==='toast'){
      this.toastAudio.play();
    }
  }
  presentToast(message: string, duration: number = 3000,action:string='',sound:boolean = true) {
    this.snackbar.open(message,action, { duration: duration });
    if (sound){
      this.playAudio('toast');
    }
  }
  constructor(private snackbar: MatSnackBar) {
    this.toastAudio.src = '/assets/audio/tones/toast.mp3';
    this.toastAudio.volume = 0.4;
    this.toastAudio.load();
  }
}
