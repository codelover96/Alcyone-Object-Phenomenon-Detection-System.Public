import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  detect: any; // It contains the choice of user. It may be either "Object" or "Phenomenon".

  constructor(private router: Router) { }

  ngOnInit(): void { }

  /** Function which navigates the user to the suitable next page according to his choice
   *  after clicking on "Next" button
   */
  onClick() { 
    if (this.detect == "Object") {
      this.router.navigate(['/main/object-detection']);

    }
    else {
      this.router.navigate(['/main/phenomenon-detection']);
    }
  }
}