import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phenomenon-warning-dialog-message',
  templateUrl: './phenomenon-warning-dialog-message.component.html',
  styleUrls: ['./phenomenon-warning-dialog-message.component.css']
})
export class PhenomenonWarningDialogMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PhenomenonWarningDialogMessageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  /**
   * Function which closes the dialog message after click on the button
   */
  onClickOK() {
    this.dialogRef.close();
  }
}
