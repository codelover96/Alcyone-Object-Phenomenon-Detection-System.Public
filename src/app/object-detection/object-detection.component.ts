import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ObjectDetectionService} from './object-detection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.component.html',
  styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent implements OnInit {

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
  results:string[];
  jsonData:string;
 

  constructor(public objectService:ObjectDetectionService,private http: HttpClient){}

  ngOnInit(): void {
  }
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
  onClick(){
     this.xvalueInput=parseInt((document.getElementById("xvalue") as HTMLInputElement).value);
     this.shapeValueInput=((document.getElementById("selectShape") as HTMLSelectElement).innerText);
     var content={ashore:this.markedAshore,ashoreWithSlope:this.markedAshoreInSlope};
     this.http.post('https://httpbin.org/post', content).toPromise().then((data:any)=>
     {
         this.jsonData=JSON.stringify(data.json);
     });
     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data:any) =>{
        this.results=data;
        this.objectService.openModal(this.results,()=>{}, ()=>{}, ()=>{});
     });
  }

}
