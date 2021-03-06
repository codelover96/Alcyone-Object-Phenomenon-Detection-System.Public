import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'app-object-results-dialog-message',
    templateUrl: './object-results-dialog-message.component.html',
    styleUrls: ['./object-results-dialog-message.component.css']
})

export class ObjectResultsDialogMessageComponent implements OnInit {
    results: any;
    shape: string;
    size: string;
    sea: boolean;
    ashore: boolean;
    ashoreWithAltitude: boolean;
    ashoreInSlope: boolean;
    specificSize: boolean;
    specificShape: boolean;
    specificShapeInput: string;
    specificSizeInput: string;
    specificWidth: number;
    specificHeight: number;
    noResults = false;

    constructor(public dialogRef: MatDialogRef<ObjectResultsDialogMessageComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        if (data.json == null) {
            this.noResults = true;
        } else {
            this.results = data.json;
            console.log(this.results[0]);
            this.shape = this.results[0].shape;
            this.size = this.results[0].size;
            this.sea = ((this.results[0].sea === '') ? -1 : JSON.parse(this.results[0].sea));
            // If the user hasn't asked for this attribute, it contains -1, otherwise it contains true/false
            this.ashore = ((this.results[0].ashore === '') ? -1 : JSON.parse(this.results[0].ashore));
            this.ashoreWithAltitude = ((this.results[0].ashoreWithAltitude === '') ? -1 : JSON.parse(this.results[0].ashoreWithAltitude));
            this.ashoreInSlope = ((this.results[0].ashoreInSlope === '') ? -1 : JSON.parse(this.results[0].ashoreInSlope));
            this.specificSize = ((this.results[0].specificSize === '') ? -1 : JSON.parse(this.results[0].specificSize));
            this.specificShape = ((this.results[0].specificShape === '') ? -1 : JSON.parse(this.results[0].specificShape));
        }
    }

    ngOnInit(): void {

    }

    /**
     * Closes dialog message after clicking on "OK" button
     */
    onClickOK() {
        this.dialogRef.close();
    }
}
