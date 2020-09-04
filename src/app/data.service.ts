import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private color1 = new BehaviorSubject<string>('');
  currentColor = this.color1.asObservable();
  constructor() { }
  changeColor(value:string)
  {
    this.color1.next(value);
  }
}
