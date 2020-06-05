import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainViewService} from '../main-view/main-view.service';
import {DetectService} from './detect.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  detect: any; // It contains the choice of user. It may be either "Object" or "Phenomenon".
  url;

  constructor(private router: Router, private mainviewService: MainViewService,private detectService: DetectService) { }

  ngOnInit(): void { 
    
  }
 
  /** Function which navigates the user to the suitable next page according to his choice
   *  after clicking on "Next" button
   */
  onClick() {
    this.url=this.mainviewService.getUrl();
    if (this.url!=null){
      if (this.detect == "Object") {
        this.router.navigate(['/main/object-detection']);
      }
      else {
        this.router.navigate(['/main/phenomenon-detection']);
      }
    }
    else{
        this.detectService.openModalWarning();
    }
  }
}