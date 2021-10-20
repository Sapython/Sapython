import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../errorHandler/error-handler.service';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private errorHandler: ErrorHandlerService,
  ) {}
  
}
