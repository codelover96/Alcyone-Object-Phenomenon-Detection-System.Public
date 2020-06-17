import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainViewService } from './main-view.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  logo = './assets/logo.png';
  textImage = './assets/text-image.png';
  fileToUpload = null;
  imageUrl = null;
  file = null;

  constructor(private router: Router, private service: MainViewService) { }

  ngOnInit(): void {
    this.imageUrl = sessionStorage.getItem('url'); // It gets the imageUrl from the session storage
    this.service.passUrl(this.imageUrl); 
  }
  ngOnDestroy() {
    sessionStorage.removeItem('url'); //It deletes the url after end of session
  }
  /** 
   * Function which opens a file chooser after clicking on "Open" choice in menu 
   **/
  openInput() {
    document.getElementById("fileInput").click();
  }
  /**
   * Function which gets the image choice of user
   **/
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      sessionStorage.setItem('url', this.imageUrl);
      this.service.passUrl(this.imageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  /**
   * Function which closes the opened input image 
   **/
  closeInput() {
    this.fileToUpload = null;
    this.imageUrl = null;
  }
  onClickContact(){
    this.service.openModalContact();
  }
}
