import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {PhenomenonDetectionService} from './phenomenon-detection.service';

@Component({
  selector: 'app-phenomenon-detection',
  templateUrl: './phenomenon-detection.component.html',
  styleUrls: ['./phenomenon-detection.component.css']
})
export class PhenomenonDetectionComponent implements OnInit {
  
  fire=false;
  flood=false;
  tornado=false;
  snow=false;
  rain=false;
  wind=false;
  hail=false;
  pollution=false;
  balllightning=false;
  ingredients=false;
  array:boolean[]=new Array;


  ngOnInit(): void {
  }
  constructor(private router:Router, public phenomService:PhenomenonDetectionService){}
 
  onClick(){
    this.array.push(this.fire);
    this.array.push(this.flood);
    this.array.push(this.tornado);
    this.array.push(this.snow);
    this.array.push(this.rain);
    this.array.push(this.balllightning);
    this.array.push(this.hail);
    this.array.push(this.wind);
    this.array.push(this.pollution);
    this.array.push(this.ingredients);
    this.phenomService.sendArray(this.array);
  }
}
