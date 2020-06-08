import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detect-warning-dialog-message',
  templateUrl: './detect-warning-dialog-message.component.html',
  styleUrls: ['./detect-warning-dialog-message.component.css']
})
export class DetectWarningDialogMessageComponent implements OnInit {

  noChoice:boolean=false;
  noUrl:boolean=false;

  constructor(public dialogRef: MatDialogRef<DetectWarningDialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data=="No choice"){
      this.noChoice=true;
    }
    else if (this.data=="No url"){
      this.noUrl=true;
    }
  }

  onClick(){
    this.dialogRef.close();
  }

}
