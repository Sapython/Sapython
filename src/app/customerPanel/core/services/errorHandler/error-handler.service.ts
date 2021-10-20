import { Injectable } from '@angular/core';
import { ConService } from '../con/con.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private console:ConService) { }
  handle(error:any){
    this.console.error(error);
  }
}
