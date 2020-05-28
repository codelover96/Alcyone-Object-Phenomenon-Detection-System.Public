import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message2',
  templateUrl: './dialog-message2.component.html',
  styleUrls: ['./dialog-message2.component.css']
})
export class DialogMessage2Component implements OnInit {
  
  //They contain the values of each one of the checkboxes of filters
  results: any;
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
    this.fire=((this.results[0].fire=='')? -1: JSON.parse(this.results[0].fire));
    this.flood=((this.results[0].flood=='')? -1: JSON.parse(this.results[0].flood));
    this.tornado=((this.results[0].tornado=='')? -1: JSON.parse(this.results[0].tornado));
    this.snow=((this.results[0].snow=='')? -1: JSON.parse(this.results[0].snow));
    this.rain=((this.results[0].rain=='')? -1: JSON.parse(this.results[0].rain));
    this.balllightning=((this.results[0].balllightning=='')? -1: JSON.parse(this.results[0].balllightning));
    this.hail=((this.results[0].hail=='')? -1: JSON.parse(this.results[0].hail));
    this.wind=((this.results[0].wind=='')? -1: JSON.parse(this.results[0].wind));
    this.pollution=((this.results[0].pollution=='')? -1: JSON.parse(this.results[0].pollution));
    this.ingredients=this.results[0].ingredients;
    this.shape=this.results[0].shape;
    this.size=this.results[0].size;
    this.speed=this.results[0].speed;
    this.altitude=this.results[0].altitude;
    this.direction=this.results[0].direction;
    this.footprint=this.results[0].footprint;
    this.location=this.results[0].location;
    this.sea=((this.results[0].sea=='')? -1: JSON.parse(this.results[0].sea));
    this.ashore=((this.results[0].ashore=='')? -1: JSON.parse(this.results[0].ashore));
    this.ashoreWithAltitude=((this.results[0].ashoreWithAltitude=='')? -1: JSON.parse(this.results[0].ashoreWithAltitude));
    this.ashoreInSlope=((this.results[0].ashoreInSlope=='')? -1: JSON.parse(this.results[0].ashoreInSlope));

  }
 
  ngOnInit(): void {}

  /**
   * Function which closes the dialog message after clicking "OK" button
   */
  onClickOK(){
    this.dialogRef.close();
  }
}
