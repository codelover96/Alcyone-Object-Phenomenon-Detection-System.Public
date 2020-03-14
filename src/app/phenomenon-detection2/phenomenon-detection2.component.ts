import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-phenomenon-detection2',
  templateUrl: './phenomenon-detection2.component.html',
  styleUrls: ['./phenomenon-detection2.component.css']
})
export class PhenomenonDetection2Component implements OnInit {

  markedShape=false;
  markedSize=false;
  markedSpeed=false;
  markedAltitude=false;
  markedDirection=false;
  markedFootprint=false;
  markedLocation=false;
  markedSea=false;
  markedAshore=false;
  markedAshorewAlt=false;
  markedAshoreInSlope=false;

  constructor() { }

  ngOnInit(): void {
  }
  onChangeShape(event:MatCheckboxChange){
    this.markedShape=event.checked;
  }
  onChangeSize(event:MatCheckboxChange){
    this.markedSize=event.checked;
  }
  onChangeAltitude(event:MatCheckboxChange){
    this.markedAltitude=event.checked
  }
  onChangeDirection(event:MatCheckboxChange){
    this.markedDirection=event.checked;
  }
  onChangeFootprint(event:MatCheckboxChange){
    this.markedFootprint=event.checked;
  }
  onChangeLocation(event:MatCheckboxChange){
    this.markedLocation=event.checked;
  }
  onChangeSea(event:MatCheckboxChange){
    this.markedSea=event.checked;
  }
  onChangeAshore(event:MatCheckboxChange){
    this.markedAshore=event.checked;
  }
  onChangeAshorewAlt(event:MatCheckboxChange){
    this.markedAshorewAlt=event.checked;
  }
  onChangeAshoreInSlope(event:MatCheckboxChange){
    this.markedAshoreInSlope=event.checked;
  }
}
