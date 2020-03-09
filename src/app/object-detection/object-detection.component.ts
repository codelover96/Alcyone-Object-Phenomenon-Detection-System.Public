import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

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
  shapeValueInput='';

  constructor() { }

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
     console.log(this.shapeValueInput);
  }
  onChangeSelect(event:MatSelectChange){
    this.shapeValueInput=event.value;
    console.log(this.shapeValueInput);
  }
}
