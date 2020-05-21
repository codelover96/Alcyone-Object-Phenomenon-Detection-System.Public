import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  logo='./assets/logo.png';
  fileToUpload=null;
  imageUrl=null;

  constructor() { }

  ngOnInit(): void {}

  /** Function which opens a file chooser after clicking on "Open" choice in menu */
  openInput(){ 
    document.getElementById("fileInput").click();
  }
  /** Function which gets the image choice of user */
  handleFileInput(file: FileList){
    this.fileToUpload=file.item(0);
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  /** Function which closes the opened input image */
  closeInput(){
    this.fileToUpload=null;
    this.imageUrl=null;
  }
  /** Function which saves the opened input image */
  saveInput(){

  }
}
