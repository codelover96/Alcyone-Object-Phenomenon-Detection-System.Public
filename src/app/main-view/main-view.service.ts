import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ContactDialogMessageComponent} from './contact-dialog-message/contact-dialog-message.component';

@Injectable()
export class MainViewService {

    imageData: string; // It contains the url of selected image
                        // nope, contains image data as base64 encoding string...

    constructor(public dialog: MatDialog) {
    }

    passImageData(url) {
        this.imageData = url;
    }

    getImageData() {
        return this.imageData;
    }

    /** Function which creates the contact dialog message according
     */
    openModalContact() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ContactDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
