import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogMessageComponent} from '../dialog-message/dialog-message.component';

@Injectable()
export class ObjectDetectionService{
    constructor(public dialog: MatDialog) { }

    openModal(message:string, yes:Function = null, no:Function = null) {
        const dialogConfig=new MatDialogConfig();
        dialogConfig.autoFocus=true;
        dialogConfig.data={
            message:message
        };
        dialogConfig.minWidth=400;
        const dialogRef=this.dialog.open(DialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            if(yes){
              yes();
            }
          }else{
            if(no){
              no();
            }
          }
        });
      }
    

}