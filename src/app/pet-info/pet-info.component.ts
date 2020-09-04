import { Component,Input, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { DataService } from '../data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  petName:string;
  petImage:string;
  color1:string;
  constructor(private data: DataService)
  {
    this.petName='Mike';
    this.petImage='https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900';
  }
  updateName(value:any)
  {
    this.petName = value;
  }
  updateImage(value:any)
  {
    this.petImage = value;
  }
  ngOnInit() {
    this.data.currentColor.subscribe(color1 => this.color1 = color1);
  }

}
