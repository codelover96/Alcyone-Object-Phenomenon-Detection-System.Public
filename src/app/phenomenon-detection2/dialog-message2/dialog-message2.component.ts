import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Phenomenon} from '../../phenomenon';

@Component({
  selector: 'app-dialog-message2',
  templateUrl: './dialog-message2.component.html',
  styleUrls: ['./dialog-message2.component.css']
})
export class DialogMessage2Component implements OnInit {
  
  results: Phenomenon;
  fire: boolean;
  flood: boolean;
  tornado: boolean;
  snow: boolean;
  rain: boolean;
  
  balllightning: boolean;
  hail: boolean;
  wind: boolean;
  pollution: boolean;
  ingredients: string;
  shape: string;
  size: string;
  speed: string;
  altitude: string;
  direction: string;
  footprint: string;
  location: string;
  sea: boolean;
  ashore: boolean;
  ashoreWithAltitude: boolean;
  ashoreInSlope: boolean;

  constructor(public dialogRef: MatDialogRef<DialogMessage2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.results=data;
    this.fire=JSON.parse(this.results[0].fire);
    this.flood=JSON.parse(this.results[0].flood);
    this.tornado=JSON.parse(this.results[0].tornado);
    this.snow=JSON.parse(this.results[0].snow);
    this.rain=JSON.parse(this.results[0].rain);
    this.balllightning=JSON.parse(this.results[0].balllightning);
    this.hail=JSON.parse(this.results[0].hail);
    this.wind=JSON.parse(this.results[0].wind);
    this.pollution=JSON.parse(this.results[0].pollution);
    this.ingredients=this.results[0].ingredients;
    this.shape=this.results[0].shape;
    this.size=this.results[0].size;
    this.speed=this.results[0].speed;
    this.altitude=this.results[0].altitude;
    this.direction=this.results[0].direction;
    this.footprint=this.results[0].footprint;
    this.location=this.results[0].location;
    this.sea=JSON.parse(this.results[0].sea);
    this.ashore=JSON.parse(this.results[0].ashore);
    this.ashoreWithAltitude=JSON.parse(this.results[0].ashoreWithAltitude);
    this.ashoreInSlope=JSON.parse(this.results[0].ashoreInSlope);

  }
 
  ngOnInit(): void {
  
  }
  onClickNext(){
    
  }
  onClickOK(){
    this.dialogRef.close();
  }
}
