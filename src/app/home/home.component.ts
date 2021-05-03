import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    image = './assets/image_1440x720.jpeg';

    constructor() {
    }

    ngOnInit(): void {
    }
}
