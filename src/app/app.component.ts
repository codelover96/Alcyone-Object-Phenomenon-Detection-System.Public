import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  disabledObject=false;
  checkedObject=false;
  disabledPhenom=false;
  checkedPhenom=false;
  disabledNext=false;
  checkedNext=false;
  fileToUpload=null;
  imageUrl : string = null;
  markedObj : string ;
  markedPhe: string;
  theCheckbox = false;

  constructor(private router:Router){}

  handleFileInput(file: FileList){
    this.fileToUpload=file.item(0);
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  openInput(){ 
    document.getElementById("fileInput").click();
  }
  onChangeObj(event:MatRadioChange){
    this.markedObj=event.value;
    console.log(this.markedObj);
  }
  onChangePhe(event:MatRadioChange){
    this.markedPhe=event.value;
    console.log(this.markedPhe);
  }
  getValue(){
    if (this.markedObj=="Object"){
        this.router.navigate(['object-detection']);
    }
    if (this.markedPhe=="Phenomenon"){
      this.router.navigate(['phenomenon-detection']);
    }
  }
}