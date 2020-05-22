import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToolbarService} from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  fileToUpload=null;
  imageUrl=null;
  
  constructor(private router:Router, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }
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
    this.toolbarService.passPictureUrl(this.imageUrl);
  }
  /** Function which closes the opened input image */
  closeInput(){
    this.fileToUpload=null;
    this.imageUrl=null;
    this.toolbarService.passPictureUrl(this.imageUrl);
  }
  /** Function which saves the opened input image */
  saveInput(){

  }
} 
