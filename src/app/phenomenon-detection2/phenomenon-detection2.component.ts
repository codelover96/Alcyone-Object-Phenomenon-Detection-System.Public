import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PhenomenonDetection2Service} from './phenomenon-detection2.service';
import { PhenomenonDetectionService} from '../phenomenon-detection/phenomenon-detection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phenomenon-detection2',
  templateUrl: './phenomenon-detection2.component.html',
  styleUrls: ['./phenomenon-detection2.component.css']
})
export class PhenomenonDetection2Component implements OnInit {

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
  results;
  array:boolean[]=new Array;

  constructor(public phenomService:PhenomenonDetectionService,public phenom2Service:PhenomenonDetection2Service,private http: HttpClient){}

  ngOnInit(): void {}

  getResults(){
    this.array=this.phenomService.getArray();
    var content={'fire':this.array[0],'flood':this.array[1],'tornado':this.array[2],'snow':this.array[3],
    'rain':this.array[4],'balllightning':this.array[5],'hail':this.array[6],'wind':this.array[7],
    'pollution':this.array[8],'ingredients':this.array[9],'shape':this.shape,'size':this.size,
    'altitude':this.altitude,'direction':this.direction,'footprint':this.footprint,
    'sea':this.sea,'ashore':this.ashore,'ashoreWithAltitude':this.ashoreWithAltitude,
    'ashoreInSlope':this.ashoreInSlope};
    this.phenom2Service.postFilters(content).toPromise().then((data:any)=>{
      this.results=data;
      this.phenom2Service.openModal(this.results,()=>{}, ()=>{}, ()=>{});
    });
    /*this.http.post('https://httpbin.org/post', content).toPromise().then((data:any)=>
     {
         this.jsonData=JSON.stringify(data.json);
     });
     this.http.get('http://localhost:3000/phenomenon').subscribe((data:any) =>{
        this.results=data;
        this.phenom2Service.openModal(this.results,()=>{}, ()=>{}, ()=>{});
     });*/
    
  }
}
