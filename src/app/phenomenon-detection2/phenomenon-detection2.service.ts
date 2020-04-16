import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogMessage2Component} from './dialog-message2/dialog-message2.component';
import { Router } from '@angular/router';

@Injectable()
export class PhenomenonDetection2Service{
    router:Router;
    constructor(public dialog: MatDialog) { }

    openModal(jsonData, next:Function=null, ok:Function=null, newSearch:Function=null) {
        const dialogConfig=new MatDialogConfig();
        dialogConfig.autoFocus=true;
        dialogConfig.data=jsonData;
        dialogConfig.minWidth=400;
        const dialogRef=this.dialog.open(DialogMessage2Component, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {});
      }
    

}