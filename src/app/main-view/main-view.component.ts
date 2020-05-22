import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToolbarService} from '../toolbar/toolbar.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  logo='./assets/logo.png';
  fileToUpload=null;
  imageUrl=null;

  constructor(private router: Router,private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.imageUrl=this.toolbarService.getPictureUrl();
    console.log(this.imageUrl);
  }
  
}
