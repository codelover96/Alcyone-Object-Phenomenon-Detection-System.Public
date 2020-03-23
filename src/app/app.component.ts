import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
  clickedNext=false;
  logo='./assets/logo.png';

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
  
}