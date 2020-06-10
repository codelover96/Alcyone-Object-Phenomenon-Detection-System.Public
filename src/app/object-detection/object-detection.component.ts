import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ObjectDetectionService } from './object-detection.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../core/alert.service';
import { Subscription } from 'rxjs';
import { MainViewService } from '../main-view/main-view.service';

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
  markedShape = false;
  markedSize = false;
  markedSea = false;
  markedAshore = false;
  markedAshorewAlt = false;
  markedAshoreInSlope = false;
  markedSpecificSize = false;
  markedSpecificShape = false;
  width: number;
  height: number;
  shapeValueInput;
  results; //It contains the responsed results from the http request
  alertMessage: AlertMessage;
  alertSubscription: Subscription;
  url;


  constructor(public objectService: ObjectDetectionService, private http: HttpClient,
    private alertService: AlertService, private mainviewService: MainViewService) { }

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
  onChangeShape(event: MatCheckboxChange) {
    this.markedShape = event.checked;
  }
  onChangeSize(event: MatCheckboxChange) {
    this.markedSize = event.checked;
  }
  onChangeSea(event: MatCheckboxChange) {
    this.markedSea = event.checked;
  }
  onChangeAshore(event: MatCheckboxChange) {
    this.markedAshore = event.checked;
  }
  onChangeAshorewAlt(event: MatCheckboxChange) {
    this.markedAshorewAlt = event.checked;
  }
  onChangeAshoreInSlope(event: MatCheckboxChange) {
    this.markedAshoreInSlope = event.checked;
  }
  onChangeSpecificSize(event: MatCheckboxChange) {
    this.markedSpecificSize = event.checked;
  }
  onChangeSpecificShape(event: MatCheckboxChange) {
    this.markedSpecificShape = event.checked;
  }

  /**
   * The function gets the selected filters and passes them with the var content to the
   * function which carries out the http request. After successful request, it shows the response
   * with dialog message.
   */
  onClick() {
    //In the case the user hasn't selected any of filters, it shows a warning dialog message
    if (this.markedShape == false && this.markedSize == false && this.markedSea == false && this.markedAshore == false
      && this.markedAshoreInSlope == false && this.markedAshorewAlt == false && this.markedSpecificShape == false && this.markedSpecificSize == false) {
      this.objectService.openModalWarning();
    }
    //In the case the user has selected a filter or filters, it sends the http request to API with the chosen filters
    else {
      this.url = this.mainviewService.getUrl(); // It gets the image url
      this.width = parseInt((document.getElementById("width") as HTMLInputElement).value);
      this.height = parseInt((document.getElementById("height") as HTMLInputElement).value);
      this.shapeValueInput = ((document.getElementById("selectShape") as HTMLSelectElement).innerText);
      var content = {
        "url": this.url, "shape": this.markedShape, "size": this.markedSize, "sea": this.markedSea,
        "ashore": this.markedAshore, "ashoreWithAltitude": this.markedAshorewAlt, "ashoreWithSlope": this.markedAshoreInSlope,
        "specificWidth": this.width, "specificHeight": this.height, "specificShape": this.shapeValueInput
      };
      this.objectService.postFilters(content).toPromise().then(data => {
        this.results = data;
        this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
      },
        error => { //in the case of non successful response, it shows a dialog message
          this.results = null;
          this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
        });
    }

  }
}
