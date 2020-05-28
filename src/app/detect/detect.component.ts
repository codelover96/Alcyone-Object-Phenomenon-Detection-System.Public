import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import {MainViewService} from '../main-view/main-view.service';
import { AlertService } from '../core/alert.service';
import { Subscription } from 'rxjs';

interface AlertMessage {
  type: string;
  text: string;
}

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  detect: any; // It contains the choice of user. It may be either "Object" or "Phenomenon".
  alertMessage: AlertMessage;
  alertSubscription: Subscription;
  url;

  constructor(private router: Router, private mainviewService: MainViewService,private alertService: AlertService) { }

  ngOnInit(): void { 
    this.alertSubscription = this.alertService.getMessage().subscribe(value => {
      if (value !== undefined) {
        this.alertMessage = {
          type: value.type,
          text: value.text
        };
      }
    });
  }
  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
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
        this.alertService.error('First select an image from "File"->"Open"');
    }
  }
}