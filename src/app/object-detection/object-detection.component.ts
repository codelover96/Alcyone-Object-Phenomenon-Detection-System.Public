import {Component, OnInit} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ObjectDetectionService} from './object-detection.service';
import {HttpClient} from '@angular/common/http';
import {MainViewService} from '../main-view/main-view.service';

@Component({
    selector: 'app-object-detection',
    templateUrl: './object-detection.component.html',
    styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent implements OnInit {

    // They contain the values of the checkboxes of filters
    markedShape = false;
    markedSize = false;
    markedSea = false;
    markedAshore = false;
    markedAshorewAlt = false;
    markedAshoreInSlope = false;
    markedSpecificSize = false;
    markedSpecificShape = false;
    width: number;
    height: number;
    shapeValueInput;
    results: any; // It contains the responded results from the http request
    url: any; // It contains the url of selected image


    constructor(public objectService: ObjectDetectionService, private http: HttpClient, private mainviewService: MainViewService) {
    }

    ngOnInit(): void {
    }

    // The following functions get the values of the filters' checkboxes
    onChangeShape(event: MatCheckboxChange) {
        this.markedShape = event.checked;
    }

    onChangeSize(event: MatCheckboxChange) {
        this.markedSize = event.checked;
    }

    onChangeSea(event: MatCheckboxChange) {
        this.markedSea = event.checked;
    }

    onChangeAshore(event: MatCheckboxChange) {
        this.markedAshore = event.checked;
    }

    onChangeAshorewAlt(event: MatCheckboxChange) {
        this.markedAshorewAlt = event.checked;
    }

    onChangeAshoreInSlope(event: MatCheckboxChange) {
        this.markedAshoreInSlope = event.checked;
    }

    onChangeSpecificSize(event: MatCheckboxChange) {
        this.markedSpecificSize = event.checked;
    }

    onChangeSpecificShape(event: MatCheckboxChange) {
        this.markedSpecificShape = event.checked;
    }

    /**
     * The function gets the selected filters and passes them with the var content to the
     * function which carries out the http request. After successful request, it shows the response
     * with dialog message
     */
    onClick() {
        // In case, user hasn't selected any filters, show a warning dialog message
        if (this.markedShape === false &&
            this.markedSize === false &&
            this.markedSea === false &&
            this.markedAshore === false &&
            this.markedAshoreInSlope === false &&
            this.markedAshorewAlt === false &&
            this.markedSpecificShape === false &&
            this.markedSpecificSize === false) {
            this.objectService.openModalWarning();
        } else {
            this.url = this.mainviewService.getUrl(); // It gets the image url
            this.width = parseInt((document.getElementById('width') as HTMLInputElement).value, 10);
            this.height = parseInt((document.getElementById('height') as HTMLInputElement).value, 10);
            this.shapeValueInput = ((document.getElementById('selectShape') as HTMLSelectElement).innerText);
            const content = {
                url: this.url,
                shape: this.markedShape,
                size: this.markedSize,
                sea: this.markedSea,
                ashore: this.markedAshore,
                ashoreWithAltitude: this.markedAshorewAlt,
                ashoreWithSlope: this.markedAshoreInSlope,
                specificWidth: this.width,
                specificHeight: this.height,
                specificShape: this.shapeValueInput
            };
            this.objectService.postFilters(content).toPromise().then(data => {
                    this.results = data;
                    this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
                },
                error => { // in the case of unsuccessful response, shows a dialog message
                    this.results = null;
                    this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
                });
        }

    }

    onChangeSelect($event: Event) {
    }
}
