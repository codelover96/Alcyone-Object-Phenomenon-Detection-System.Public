import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogMessageComponent} from '../dialog-message/dialog-message.component';
import { Router } from '@angular/router';

@Injectable()
export class ObjectDetectionService{
    router:Router;
    constructor(public dialog: MatDialog) { }

    openModal(message:string, next:Function=null, ok:Function=null, newSearch:Function=null) {
        const dialogConfig=new MatDialogConfig();
        dialogConfig.autoFocus=true;
        dialogConfig.data={
            message:message
        };
        dialogConfig.minWidth=400;
        const dialogRef=this.dialog.open(DialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if(result=='Next phenomenon'){
            
          }else if (result=='OK'){
            
          }
          else if (result=='New search'){
            this.router.navigate(['app']);
          }
        });
      }
    

}