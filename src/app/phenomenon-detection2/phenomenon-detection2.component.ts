import { Component, OnInit } from '@angular/core';
import { PhenomenonDetection2Service } from './phenomenon-detection2.service';
import { PhenomenonDetectionService } from '../phenomenon-detection/phenomenon-detection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phenomenon-detection2',
  templateUrl: './phenomenon-detection2.component.html',
  styleUrls: ['./phenomenon-detection2.component.css']
})
export class PhenomenonDetection2Component implements OnInit {

  //They contain the values of each one of the checkboxes of filters
  shape = false;
  size = false;
  speed = false;
  altitude = false;
  direction = false;
  footprint = false;
  location = false;
  sea = false;
  ashore = false;
  ashoreWithAltitude = false;
  ashoreInSlope = false;
  results: any; //It contains the responsed results from the http request
  array: boolean[] = new Array; //It contains the selected filters

  constructor(public phenomService: PhenomenonDetectionService, public phenom2Service: PhenomenonDetection2Service,
    private http: HttpClient) { }

  ngOnInit(): void {
  }


  /**
   * Function which sends the selected filters from both phenomenon-detection component
   * and phenomenon-detection2 component and passes them with the var content to the
   * function which carries out the http request. After successful request, it shows the response
   * with dialog message.
   */
  getResults() {
    this.array = this.phenomService.getArray(); // It gets the selected fitlers from the previous phenomenon page
    //In the case the user hasn't selected any of filters, it shows a warning dialog message
    if (this.array[0] == false && this.array[1] == false && this.array[2] == false && this.array[3] == false
      && this.array[4] == false && this.array[5] == false && this.array[6] == false && this.array[7] == false
      && this.array[8] == false && this.array[9] == false && this.shape == false && this.size == false &&
      this.altitude == false && this.direction == false && this.footprint == false && this.sea == false
      && this.ashore == false && this.ashoreInSlope == false && this.ashoreWithAltitude == false) {
      this.phenom2Service.openModalWarning();
    }
    //In the case the user has selected a filter or filters, it sends the http request to API with the chosen filters
    else {
      var content = {
        "fire": this.array[0], "flood": this.array[1], "tornado": this.array[2], "snow": this.array[3],
        "rain": this.array[4], "balllightning": this.array[5], "hail": this.array[6], "wind": this.array[7],
        "pollution": this.array[8], "ingredients": this.array[9], "shape": this.shape, "size": this.size,
        "altitude": this.altitude, "direction": this.direction, "footprint": this.footprint,
        "sea": this.sea, "ashore": this.ashore, "ashoreWithAltitude": this.ashoreWithAltitude,
        "ashoreInSlope": this.ashoreInSlope
      };
      this.phenom2Service.postFilters(content).toPromise().then(data => {
        this.results = data;
        this.phenom2Service.openModalResults(this.results);
      },
        error => { //in the case of non successful response, it shows a dialog message
          this.results = null;
          this.phenom2Service.openModalResults(this.results);
        });
    }


  }
}
