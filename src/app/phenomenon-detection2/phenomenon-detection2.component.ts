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
  results:object[];
  jsonData:string;
  array:boolean[]=new Array;

  constructor(public phenomService:PhenomenonDetectionService,public phenom2Service:PhenomenonDetection2Service,private http: HttpClient){}

  ngOnInit(): void {
  }
  onChangeShape(event:MatCheckboxChange){
    this.markedShape=event.checked;
  }
  onChangeSize(event:MatCheckboxChange){
    this.markedSize=event.checked;
  }
  onChangeSpeed(event:MatCheckboxChange){
    this.markedSpeed=event.checked;
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
  getResults(){
    this.array=this.phenomService.getArray();
    var content={fire:this.array[0],flood:this.array[1],tornado:this.array[2],snow:this.array[3],rain:this.array[4],balllightning:this.array[5],hail:this.array[6],wind:this.array[7],pollution:this.array[8],ingredients:this.array[9],shape:this.markedShape,size:this.markedSize,altitude:this.markedAltitude,direction:this.markedDirection,footprint:this.markedFootprint,sea:this.markedSea,ashore:this.markedAshore,ashoreWithAltitude:this.markedAshorewAlt,ashoreWithSlope:this.markedAshoreInSlope};
     this.http.post('https://httpbin.org/post', content).toPromise().then((data:any)=>
     {
         this.jsonData=JSON.stringify(data.json);
     });
     this.http.get('http://localhost:3000/phenomenon').subscribe((data:any) =>{
        this.results=data;
        this.phenom2Service.openModal(this.results,()=>{}, ()=>{}, ()=>{});
     });
    
  }
}
