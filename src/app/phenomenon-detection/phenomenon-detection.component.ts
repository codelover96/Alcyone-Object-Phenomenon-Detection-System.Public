import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhenomenonDetectionService } from './phenomenon-detection.service';

@Component({
  selector: 'app-phenomenon-detection',
  templateUrl: './phenomenon-detection.component.html',
  styleUrls: ['./phenomenon-detection.component.css']
})
export class PhenomenonDetectionComponent implements OnInit {
  // They contain the values of each one of the checkboxes of filters
  fire = false;
  flood = false;
  hurricane = false;
  snow = false;
  rain = false;
  wind = false;
  hail = false;
  pollution = false;
  balllightning = false;
  ingredients = false;
  array: boolean[] = []; // It contains the values of all checkboxes


  ngOnInit(): void { }

  constructor(private router: Router, public phenomService: PhenomenonDetectionService) { }

  /**
   * The function collects the selected filters and adds them in an array
   * and passes them to another function
   */
  onClick() {
    this.array.push(this.fire);
    this.array.push(this.flood);
    this.array.push(this.hurricane);
    this.array.push(this.snow);
    this.array.push(this.rain);
    this.array.push(this.balllightning);
    this.array.push(this.hail);
    this.array.push(this.wind);
    this.array.push(this.pollution);
    this.array.push(this.ingredients);
    this.phenomService.sendArray(this.array);
  }
}
