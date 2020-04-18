import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Object} from '../../object';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {
  
  results: Object;
  shape:string;
  size:string;
  sea:boolean;
  ashore:boolean;
  ashoreWithAltitude:boolean;
  ashoreInSlope:boolean;
  specificSize:boolean;
  specificShape:boolean;
  
  constructor(public dialogRef: MatDialogRef<DialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.results=data;
    this.shape=this.results[0].shape;
    this.size=this.results[0].size;
    this.sea=JSON.parse(this.results[0].sea);
    this.ashore=JSON.parse(this.results[0].ashore);
    this.ashoreWithAltitude=JSON.parse(this.results[0].ashoreWithAltitude);
    this.ashoreInSlope=JSON.parse(this.results[0].ashoreInSlope);
    this.specificSize=JSON.parse(this.results[0].specificSize);
    this.specificShape=JSON.parse(this.results[0].specificShape);
  }

  ngOnInit(): void {
  
  }
  onClickNext(){
    
  }
  onClickOK(){
    this.dialogRef.close();
  }
}
