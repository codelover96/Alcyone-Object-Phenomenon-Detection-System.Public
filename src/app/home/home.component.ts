import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image='./assets/image.jpeg';
  height;
  width;
  constructor() {
    this.height = screen.height; //800
    this.width = screen.width; //1280
  }
  ngOnInit(): void {
  }
  getWidth() {
      return this.width;
  }
  getHeight() {
    return this.height;
  }
}
