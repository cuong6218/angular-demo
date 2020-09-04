import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {
  colors : string[]=['blue', 'red', 'green', 'pink', 'yellow', 'black', 'gray', 'purple', 'orange'];
  color1:string;
  color2 : string;
  constructor(private data:DataService) { }
  ngOnInit() {
    this.data.currentColor.subscribe(color1 => this.color1 = color1);
    this.data.currentColor.subscribe(color2 => this.color2 = color2);
  }


  newColor1(value:string)
  {
    this.data.changeColor(value);
  }
  newColor2(value:string)
  {
    this.data.changeColor(value);
  }
}
