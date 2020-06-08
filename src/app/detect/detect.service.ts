import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DetectWarningDialogMessageComponent} from './detect-warning-dialog-message/detect-warning-dialog-message.component';

@Injectable()
export class DetectService {
    
constructor(public dialog: MatDialog){

}
openModalWarning(error){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 400;
    dialogConfig.data=error;
    const dialogRef = this.dialog.open( DetectWarningDialogMessageComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { });
}
}