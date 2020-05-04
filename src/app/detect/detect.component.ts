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
  detect;
  
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
    if (this.detect=="Object"){
        this.router.navigate(['/main/object-detection']);

    }
    else{
      this.router.navigate(['/main/phenomenon-detection']);
    }
  }
}