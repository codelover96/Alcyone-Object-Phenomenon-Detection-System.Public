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

  ngOnInit(): void {
  }
  openInput(){ 
    document.getElementById("fileInput").click();
  }
  handleFileInput(file: FileList){
    this.fileToUpload=file.item(0);
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}

}
