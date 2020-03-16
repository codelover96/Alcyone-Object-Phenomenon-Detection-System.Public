import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import {MatDialog} from '@angular/material/dialog';
import {ObjectDetectionService} from './object-detection.service';

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
  name:string;
  animal:string;

  constructor(public objectService:ObjectDetectionService){}

  ngOnInit(): void {
  }
  onChangeShape(event:MatCheckboxChange){
    this.markedShape=event.checked;
    console.log(this.markedShape);
  }
  onChangeSize(event:MatCheckboxChange){
    this.markedSize=event.checked;
    console.log(this.markedSize);
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
     this.shapeValueInput=((document.getElementById("selectShape") as HTMLSelectElement).value);
     console.log(this.xvalueInput);
     console.log(this.shapeValueInput);
     var data = null;
    this.objectService.openModal("Message Test", ()=>{
      console.log('Yes');
    }, ()=>{
      console.log('No');
    });
  }
  
  /*onChangeSelect(event:MatSelectChange){
    this.shapeValueInput=<HTMLSelectElement>document.getElementById('selectShape');
    this.shapeValueInput=event.value;
    console.log(this.shapeValueInput);
  }*/
}
