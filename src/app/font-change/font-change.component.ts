import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-font-change',
  templateUrl: './font-change.component.html',
  styleUrls: ['./font-change.component.css']
})
export class FontChangeComponent implements OnInit {


  imgUrl = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  count = 0;
  fontSize:number=16;
  color1:string;
  constructor(private data:DataService)
  {
    this.fontSize;
  }
  ngOnInit(){
    this.data.currentColor.subscribe(color1 => this.color1 = color1);
  }
  changeFont(value:any)
  {
    this.fontSize = value;
  }

  countUp()
  {
    this.count += 1;
  }
}
