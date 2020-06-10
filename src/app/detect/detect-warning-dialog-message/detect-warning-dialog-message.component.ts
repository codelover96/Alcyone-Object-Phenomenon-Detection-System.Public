import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detect-warning-dialog-message',
  templateUrl: './detect-warning-dialog-message.component.html',
  styleUrls: ['./detect-warning-dialog-message.component.css']
})
export class DetectWarningDialogMessageComponent implements OnInit {

  noChoice: boolean = false; // It contains if there is a choice or not (phenomenon or object)
  noUrl: boolean = false; // It contains if there is a url of image choice or not

  constructor(public dialogRef: MatDialogRef<DetectWarningDialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // It sets the boolean variables according the error content 
    if (this.data == "No choice") {
      this.noChoice = true;
    }
    else if (this.data == "No url") {
      this.noUrl = true;
    }
  }

  /**
   * Function which closes the dialog message after click on the button
   */
  onClick() {
    this.dialogRef.close();
  }

}
