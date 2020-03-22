import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

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

  ngOnInit(): void {
  }
  constructor(private router:Router){}
  
  onClick(){
    this.router.navigate(['phenomenon-detection2']);
  }
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
}
