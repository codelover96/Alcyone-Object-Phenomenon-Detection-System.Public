import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ObjectDetectionService} from './object-detection.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../core/alert.service';
import { Subscription } from 'rxjs';

interface AlertMessage {
  type: string;
  text: string;
}

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.component.html',
  styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent implements OnInit {

  //They contain the values of the checkboxes of filters
  markedShape=false;
  markedSize=false;
  markedSea=false;
  markedAshore=false;
  markedAshorewAlt=false;
  markedAshoreInSlope=false;
  markedSpecificSize=false;
  markedSpecificShape=false;
  xvalueInput;
  shapeValueInput;
  results; //It contains the responsed results from the http request
  alertMessage: AlertMessage;
  alertSubscription: Subscription;
 

  constructor(public objectService:ObjectDetectionService,private http: HttpClient,
    private alertService: AlertService){}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.getMessage().subscribe(value => {
      if (value !== undefined) {
        this.alertMessage = {
          type: value.type,
          text: value.text
        };
      }
    });
  }
  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
  /**The following functions get the values of the filters' checkboxes */
  onChangeShape(event:MatCheckboxChange){
    this.markedShape=event.checked;
  }
  onChangeSize(event:MatCheckboxChange){
    this.markedSize=event.checked;
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
  onChangeSpecificSize(event:MatCheckboxChange){
    this.markedSpecificSize=event.checked;
  }
  onChangeSpecificShape(event:MatCheckboxChange){
    this.markedSpecificShape=event.checked;
  }
  /**The function gets the selected filters and passes them with the var content to the
   * function which carries out the http request. After successful request, it shows the response
   * with dialog message.
   */
  onClick(){
     this.xvalueInput=parseInt((document.getElementById("xvalue") as HTMLInputElement).value);
     this.shapeValueInput=((document.getElementById("selectShape") as HTMLSelectElement).innerText);
     var content={shape:this.markedShape,size:this.markedSize,sea:this.markedSea,ashore:this.markedAshore,ashoreWithAltitude:this.markedAshorewAlt,ashoreWithSlope:this.markedAshoreInSlope,specificSize:this.xvalueInput,specificShape:this.shapeValueInput};
     this.objectService.postFilters(content).toPromise().then(data=>{
      this.results=data;
      this.objectService.openModal(this.results);
     },
     error=>{ //in the case of non successful response , it shows an alert message with the error
      this.alertService.error(error.errror);
     });
  }

}
