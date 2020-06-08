import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ObjectDetectionService } from '../object-detection.service';


@Component({
  selector: 'app-object-results-dialog-message',
  templateUrl: './object-results-dialog-message.component.html',
  styleUrls: ['./object-results-dialog-message.component.css']
})
export class ObjectResultsDialogMessageComponent implements OnInit {

  //They contain the values of results
  results: Object;
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
  noResults: boolean = false;

  constructor(public dialogRef: MatDialogRef<ObjectResultsDialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private objectService: ObjectDetectionService) {
    if (data.json == null) {
      this.noResults = true;
    }
    else {
      this.results = data.json;
      this.shape = this.results[0].shape;
      this.size = this.results[0].size;
      this.sea = ((this.results[0].sea == '') ? -1 : JSON.parse(this.results[0].sea));
      this.ashore = ((this.results[0].ashore == '') ? -1 : JSON.parse(this.results[0].ashore));
      this.ashoreWithAltitude = ((this.results[0].ashoreWithAltitude == '') ? -1 : JSON.parse(this.results[0].ashoreWithAltitude));
      this.ashoreInSlope = ((this.results[0].ashoreInSlope == '') ? -1 : JSON.parse(this.results[0].ashoreInSlope));
      this.specificSize = ((this.results[0].specificSize == '') ? -1 : JSON.parse(this.results[0].specificSize));
      this.specificShape = ((this.results[0].specificShape == '') ? -1 : JSON.parse(this.results[0].specificShape));
    }
  }

  ngOnInit(): void {

  }
  /**
   * Function which closes the dialog message after clicking on "OK" button
   */
  onClickOK() {
    this.dialogRef.close();
  }
}
