import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message2',
  templateUrl: './dialog-message2.component.html',
  styleUrls: ['./dialog-message2.component.css']
})
export class DialogMessage2Component implements OnInit {
  
  results: string;

  constructor(public dialogRef: MatDialogRef<DialogMessage2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.results=data;
  }
 
  ngOnInit(): void {
  
  }
  onClickNext(){
    
  }
  onClickOK(){
    this.dialogRef.close();
  }
}
