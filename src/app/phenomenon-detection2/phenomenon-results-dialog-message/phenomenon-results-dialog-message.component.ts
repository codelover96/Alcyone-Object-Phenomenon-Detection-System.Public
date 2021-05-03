import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-phenomenon-results-dialog-message',
    templateUrl: './phenomenon-results-dialog-message.component.html',
    styleUrls: ['./phenomenon-results-dialog-message.component.css']
})
export class PhenomenonResultsDialogMessageComponent implements OnInit {

    // They contain the values of each one of the checkboxes of filters
    results: any;
    fire: boolean;
    flood: boolean;
    hurricane: boolean;
    snow: boolean;
    rain: boolean;
    balllightning: boolean;
    hail: boolean;
    wind: boolean;
    pollution: boolean;
    ingredients: string;
    shape: string;
    size: string;
    speed: number;
    altitude: string;
    direction: string;
    footprint: string;
    location: string;
    sea: boolean;
    ashore: boolean;
    ashoreWithAltitude: boolean;
    ashoreInSlope: boolean;
    noResults = false;

    constructor(public dialogRef: MatDialogRef<PhenomenonResultsDialogMessageComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        // If there are no results from the detection, the boolean variable becomes true
        if (data == null) {
            this.noResults = true;
        } else {
            this.results = data;
            // If the user hasn't asked for this attribute, it contains -1, otherwise it contains the true/false value
            this.fire = ((this.results[0].fire === '') ? -1 : JSON.parse(this.results[0].fire));
            this.flood = ((this.results[0].flood === '') ? -1 : JSON.parse(this.results[0].flood));
            this.hurricane = ((this.results[0].hurricane === '') ? -1 : JSON.parse(this.results[0].hurricane));
            this.snow = ((this.results[0].snow === '') ? -1 : JSON.parse(this.results[0].snow));
            this.rain = ((this.results[0].rain === '') ? -1 : JSON.parse(this.results[0].rain));
            this.balllightning = ((this.results[0].balllightning === '') ? -1 : JSON.parse(this.results[0].balllightning));
            this.hail = ((this.results[0].hail === '') ? -1 : JSON.parse(this.results[0].hail));
            this.wind = ((this.results[0].wind === '') ? -1 : JSON.parse(this.results[0].wind));
            this.pollution = ((this.results[0].pollution === '') ? -1 : JSON.parse(this.results[0].pollution));
            this.ingredients = this.results[0].ingredients;
            this.shape = this.results[0].shape; // It gets a string value
            this.size = this.results[0].size;
            this.speed = this.results[0].speed;
            this.altitude = this.results[0].altitude;
            this.direction = this.results[0].direction;
            this.footprint = this.results[0].footprint;
            this.location = this.results[0].location;
            this.sea = ((this.results[0].sea === '') ? -1 : JSON.parse(this.results[0].sea));
            this.ashore = ((this.results[0].ashore === '') ? -1 : JSON.parse(this.results[0].ashore));
            this.ashoreWithAltitude = ((this.results[0].ashoreWithAltitude === '') ? -1 : JSON.parse(this.results[0].ashoreWithAltitude));
            this.ashoreInSlope = ((this.results[0].ashoreInSlope === '') ? -1 : JSON.parse(this.results[0].ashoreInSlope));
        }

    }

    ngOnInit(): void {
    }

    /**
     * Function which closes the dialog message after clicking "OK" button
     */
    onClickOK() {
        this.dialogRef.close();
    }


}
