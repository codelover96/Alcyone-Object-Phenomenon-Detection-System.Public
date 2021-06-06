import {Component, OnInit} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ObjectDetectionService} from './object-detection.service';
import {HttpClient} from '@angular/common/http';
import {MainViewService} from '../main-view/main-view.service';
import {stringify} from 'querystring';
import {MatSelectChange} from '@angular/material/select';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-object-detection',
    templateUrl: './object-detection.component.html',
    styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent implements OnInit {
    // is spinner loading
    loading = false;
    // values of the checkboxes
    ship = false; // is ship? true or false
    oilSpill = false;
    smoke = false;
    fire = false;
    markedShape = false;
    markedSize = false;
    markedSea = false;
    markedArea = false;
    markedOrientation = false;
    markedAshore = false;
    markedAshorewAlt = false;
    markedAshoreInSlope = false;
    markedSpecificSize = false;
    markedSpecificShape = false;
    markedSpecificOrientation = false;
    width: number;
    height: number;
    shapeValueInput: string;
    results: any; // results from the http request
    imageData: string; // url of selected image
    matSelectShapeInput: { value: string, text: string } = {
        value: null,
        text: null
    };

    matSelectOrientationInput: { value: string, text: string } = {
        value: null,
        text: null
    };

    disableShapesForm = new FormControl(false);
    disableOrientationForm = new FormControl(false);

    constructor(public objectService: ObjectDetectionService, private http: HttpClient, private mainviewService: MainViewService) {
        this.width = null;
        this.height = null;
    }

    // The following functions get the values of the filters' checkboxes

    ngOnInit(): void {

    }

    onChangeShip(event: MatCheckboxChange) {
        this.ship = event.checked;
    }

    onChangeOilSpill(event: MatCheckboxChange) {
        this.oilSpill = event.checked;
    }

    onChangeSmoke(event: MatCheckboxChange) {
        this.smoke = event.checked;
    }

    onChangeFire(event: MatCheckboxChange) {
        this.fire = event.checked;
    }

    onChangeShape(event: MatCheckboxChange) {
        this.markedShape = event.checked;
    }

    onChangeSize(event: MatCheckboxChange) {
        this.markedSize = event.checked;
    }

    onChangeArea(event: MatCheckboxChange) {
        this.markedArea = event.checked;
    }

    onChangeOrientation(event: MatCheckboxChange) {
        this.markedOrientation = event.checked;
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
        if (!this.markedSpecificSize) { // initialise to null if checkbox is not selected
            this.width = null;
            this.height = null;
        }
    }

    onChangeSpecificShape(event: MatCheckboxChange) {
        this.markedSpecificShape = event.checked;
        if (!this.markedSpecificShape) {
            this.matSelectShapeInput.text = null;
            this.matSelectShapeInput.value = null;
        }
    }

    onChangeSpecificOrientation(event: MatCheckboxChange) {
        this.markedSpecificOrientation = event.checked;
        if (!this.markedSpecificOrientation) {
            this.matSelectOrientationInput.text = null;
            this.matSelectOrientationInput.value = null;
        }
    }

    /**
     * Gets selected filters and assigns them to variable content. Variable content is then passed to http request.
     * After successful request, shows the response with dialog message.
     */
    onClick() {
        // show spinner
        this.loading = true;
        const filters = [this.ship, this.oilSpill, this.smoke, this.fire, this.markedShape, this.markedSize, this.markedSea, this.markedAshore, this.markedArea,
            this.markedAshoreInSlope, this.markedAshorewAlt, this.markedSpecificShape, this.markedSpecificSize, this.markedOrientation,
            this.markedSpecificOrientation];
        const noneSelected = filters.every(filter => filter === false);

        if (noneSelected) {
            this.objectService.openModalWarning();
        } else {
            // console.log('at least one filter selected');
            // console.log(filters);

            this.imageData = this.mainviewService.getImageData();
            if (this.markedSpecificSize) {
                // means user wants to search by size
                // so...
                // he probably has entered values at input fields
                // check if input is valid (ie is a number, greater than 0 and NOT null)
                // then try to parse input as int or float, dont know
                // then assign those values to this.width and this.height
                this.width = parseInt((document.getElementById('width') as HTMLInputElement).value, 10);
                this.height = parseInt((document.getElementById('height') as HTMLInputElement).value, 10);
            }

            // right now, getting the element by id, displays NaN on input field, IF there is not a number in them when clicking GO.
            // this.width = parseInt((document.getElementById('width') as HTMLInputElement).value, 10);
            // this.height = parseInt((document.getElementById('height') as HTMLInputElement).value, 10);
            // this.shapeValueInput = ((document.getElementById('selectShape') as HTMLSelectElement).innerText);


            if (this.markedSpecificShape && this.matSelectShapeInput.value === null && this.matSelectShapeInput.text === null) {
                // 'shape' checkbox is selected, but no shape is selected from the list
            }

            const content = {
                url: this.imageData,
                ship : this.ship,
                oilSpill : this.oilSpill,
                smoke : this.smoke,
                fire : this.fire,
                metrics: {
                    shape: this.markedShape,
                    size: this.markedSize,
                    area: this.markedArea,
                    orientation: this.markedOrientation
                },
                sea: this.markedSea,
                ashore: this.markedAshore,
                ashoreWithAltitude: this.markedAshorewAlt,
                ashoreWithSlope: this.markedAshoreInSlope,
                specificWidth: this.width,
                specificHeight: this.height,
                specificShape: this.matSelectShapeInput.value,
                specificOrientation: this.matSelectOrientationInput.value,
            };
            console.log('content is :', JSON.stringify(content));
            console.log('content type is :', typeof content);
            this.objectService.postFilters(content).toPromise().then(data => {
                    this.results = data;
                    this.loading = false;
                    this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
                },
                error => { // in the case of unsuccessful response show a dialog message
                    this.results = null;
                    this.loading = false;
                    this.objectService.openModalResults(this.results, this.width, this.height, this.shapeValueInput);
                });
        }

    }

    onChangeSelectShape(event: MatSelectChange) {
        this.matSelectShapeInput = {
            value: event.value,
            text:  event.source.triggerValue
        };
        console.log('markefSpecificShape is ', this.markedSpecificShape);
        if (!this.markedSpecificShape) {
            this.matSelectShapeInput.value = null;
            this.matSelectShapeInput.text = null;
        }
        console.log('matSelectInput', this.matSelectShapeInput);
    }

    onChangeSelectOrientation(event: MatSelectChange) {
        this.matSelectOrientationInput = {
            value: event.value,
            text:  event.source.triggerValue
        };
        console.log('markefSpecificOrientation is ', this.markedSpecificOrientation);
        if (!this.markedSpecificOrientation) {
            this.matSelectOrientationInput.value = null;
            this.matSelectOrientationInput.text = null;
        }
        console.log('matSelectInput', this.matSelectShapeInput);
    }
}
// TODO search by coordinates --> longitude, latitude. Create a mat-checkbox like previous checkboxes.
