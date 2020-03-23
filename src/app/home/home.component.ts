import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    console.log(this.markedObj);
  }
  onChangePhe(event:MatRadioChange){
    this.markedPhe=event.value;
    console.log(this.markedPhe);
  }
  onClick(){
    if (this.markedObj=="Object"){
        this.router.navigate(['object-detection']);
        this.clickedNext=true;
    }
    if (this.markedPhe=="Phenomenon"){
      this.router.navigate(['phenomenon-detection']);
      this.clickedNext=true;
    }
  }
}
