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
  
  markedFire=false;
  markedFlood=false;
  markedTornado=false;
  markedSnow=false;
  markedRain=false;
  markedBalllight=false;
  markedHail=false;
  markedWind=false;
  markedPollution=false;
  markedIngredients=false;
  array:boolean[]=new Array;

  ngOnInit(): void {
  }
  constructor(private router:Router, public phenomService:PhenomenonDetectionService){}
  
  onChangeFire(event:MatCheckboxChange){
    this.markedFire=event.checked;
  }
  onChangeFlood(event:MatCheckboxChange){
    this.markedFlood=event.checked;
  }
  onChangeTornado(event:MatCheckboxChange){
    this.markedTornado=event.checked;
  }
  onChangeSnow(event:MatCheckboxChange){
    this.markedSnow=event.checked;
  }
  onChangeRain(event:MatCheckboxChange){
    this.markedRain=event.checked;
  }
  onChangeBalllight(event:MatCheckboxChange){
    this.markedBalllight=event.checked;
  }
  onChangeHail(event:MatCheckboxChange){
    this.markedHail=event.checked;
  }
  onChangeWind(event:MatCheckboxChange){
    this.markedWind=event.checked;
  }
  onChangePollution(event:MatCheckboxChange){
    this.markedPollution=event.checked;
  }
  onChangeIngred(event:MatCheckboxChange){
    this.markedIngredients=event.checked;
  }
  passArray(){
    this.array.push(this.markedFire);
    this.array.push(this.markedFlood);
    this.array.push(this.markedTornado);
    this.array.push(this.markedSnow);
    this.array.push(this.markedRain);
    this.array.push(this.markedBalllight);
    this.array.push(this.markedHail);
    this.array.push(this.markedWind);
    this.array.push(this.markedPollution);
    this.array.push(this.markedIngredients);
    this.phenomService.array=this.array;
  }
}
