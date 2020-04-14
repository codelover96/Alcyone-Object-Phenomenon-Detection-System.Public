import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ObjectDetectionService} from './object-detection.service';
import {Object} from '../object';

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
  results:Object[];
 

  constructor(public objectService:ObjectDetectionService){}

  ngOnInit(): void {
  }
  onChangeShape(event:MatCheckboxChange){
    //const writeJsonFile = require('write-json-file');
    this.markedShape=event.checked;
    /*var shape = String(this.markedShape);
    var jsonObj=JSON.parse(shape);
    var jsonContent=JSON.stringify(jsonObj);*/
    //this.fs.writeFile("object.json",jsonContent);
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
     var jsonContent=JSON.stringify({ashore:this.markedAshore,ashoreWithSlope:this.markedAshoreInSlope});
     this.objectService.post(jsonContent).subscribe(data=>{
       this.results.push(data);
     });
     this.objectService.openModal(this.results, ()=>{}, ()=>{}, ()=>{});
  }

}
