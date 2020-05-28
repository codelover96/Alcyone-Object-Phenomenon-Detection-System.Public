import { Component, OnInit } from '@angular/core';
import { PhenomenonDetection2Service} from './phenomenon-detection2.service';
import { PhenomenonDetectionService} from '../phenomenon-detection/phenomenon-detection.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../core/alert.service';
import { Subscription } from 'rxjs';

interface AlertMessage {
  type: string;
  text: string;
}

@Component({
  selector: 'app-phenomenon-detection2',
  templateUrl: './phenomenon-detection2.component.html',
  styleUrls: ['./phenomenon-detection2.component.css']
})
export class PhenomenonDetection2Component implements OnInit {

  //They contain the values of each one of the checkboxes of filters
  shape=false;
  size=false;
  speed=false;
  altitude=false;
  direction=false;
  footprint=false;
  location=false;
  sea=false;
  ashore=false;
  ashoreWithAltitude=false;
  ashoreInSlope=false;
  results:any; //It contains the responsed results from the http request
  array:boolean[]=new Array; //It contains the selected filters
  alertMessage: AlertMessage; //It contains the alert message
  alertSubscription: Subscription;

  constructor(public phenomService:PhenomenonDetectionService,public phenom2Service:PhenomenonDetection2Service,
    private http: HttpClient, private alertService: AlertService){}

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

  /**
   * Function which sends the selected filters from both phenomenon-detection component
   * and phenomenon-detection2 component and passes them with the var content to the
   * function which carries out the http request. After successful request, it shows the response
   * with dialog message.
   */
  getResults(){
    this.array=this.phenomService.getArray();
    var content={"fire":this.array[0],"flood":this.array[1],"tornado":this.array[2],"snow":this.array[3],
    "rain":this.array[4],"balllightning":this.array[5],"hail":this.array[6],"wind":this.array[7],
    "pollution":this.array[8],"ingredients":this.array[9],"shape":this.shape,"size":this.size,
    "altitude":this.altitude,"direction":this.direction,"footprint":this.footprint,
    "sea":this.sea,"ashore":this.ashore,"ashoreWithAltitude":this.ashoreWithAltitude,
    "ashoreInSlope":this.ashoreInSlope};
    this.phenom2Service.postFilters(content).toPromise().then(data=>{
      this.results=data;
      this.phenom2Service.openModal(this.results);
    },
    error=>{ //in the case of non successful response, it shows an alert message with the error
      this.alertService.error(error.errror);
    });
    
  }
}
