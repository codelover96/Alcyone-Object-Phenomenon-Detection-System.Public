import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  disabledObject=false;
  checkedObject=false;
  disabledPhenom=false;
  checkedPhenom=false;
  disabledNext=false;
  checkedNext=false;
  markedObj : string ;
  markedPhe: string;
  theCheckbox = false;
  clickedNext=false;
  
  constructor(private router:Router){}

  ngOnInit(): void {
  }
  onChangeObj(event:MatRadioChange){
    this.markedObj=event.value;
  }
  onChangePhe(event:MatRadioChange){
    this.markedPhe=event.value;
  }
  onClick(){
    if (this.markedObj=="Object"){
        this.router.navigate(['/main/object-detection']);

    }
    if (this.markedPhe=="Phenomenon"){
      this.router.navigate(['/main/phenomenon-detection']);
    }
  }
}