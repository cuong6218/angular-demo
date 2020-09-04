import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  selectOption:string;
  result:number;
  number1:number;
  number2:number;
  color1:string;
  color2:string;
  constructor(private data:DataService) { }

  calculate(){
    switch(this.selectOption){
        case 'plus':
          this.result = this.number1+this.number2;
          break;
        case 'sub':
          this.result = this.number1-this.number2;
        break;
        case 'multi':
            this.result = this.number1*this.number2;
        break;
        case 'div':
            this.result = this.number1/this.number2;
        break;
    }
  }

  ngOnInit(){
    this.data.currentColor.subscribe(color1 => this.color1 = color1);
    this.data.currentColor.subscribe(color2 => this.color2 = color2);
  }
}
