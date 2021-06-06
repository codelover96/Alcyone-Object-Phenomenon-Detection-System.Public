import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'my-app';
    /*logo = './assets/logo.png';*/
    logoIcon = './assets/new_logo_300x300.png';
    bannerLogo = '/assets/my_logo_design_smaller_cropped_scalled.png';

    constructor(private router: Router) {
    }

}
