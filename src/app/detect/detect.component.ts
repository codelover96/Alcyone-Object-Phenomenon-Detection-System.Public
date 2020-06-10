import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainViewService } from '../main-view/main-view.service';
import { DetectService } from './detect.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  detect: any; // It contains the choice of user. It may be either "Object" or "Phenomenon".
  url: any; //It contains the url of selected image 

  constructor(private router: Router, private mainviewService: MainViewService, private detectService: DetectService) { }

  ngOnInit(): void {

  }

  /** Function which navigates the user to the suitable next page according to his choice or to the
   * suitable dialog message after clicking on "Next" button
   */
  onClick() {
    this.url = this.mainviewService.getUrl();
    if (this.url != null) {
      if (this.detect == "Object") {
        this.router.navigate(['/main/object-detection']);
      }
      else if (this.detect == "Phenomenon") {
        this.router.navigate(['/main/phenomenon-detection']);
      }
      else { //If the user didn't select object or phenomenon it shows a warning dialog message
        this.detectService.openModalWarning("No choice");
      }
    }
    else { //If the user didn't select an image it shows a warning dialog message
      this.detectService.openModalWarning("No url");
    }
  }
}