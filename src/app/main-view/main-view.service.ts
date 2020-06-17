import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContactDialogMessageComponent } from './contact-dialog-message/contact-dialog-message.component';

@Injectable()
export class MainViewService {

    url: any; //It contains the url of selected image

    constructor(public dialog: MatDialog) { }

    /**
     * Function which gets the selected image url and file
     * @param url the selected image url
     * @param image the selected image file
     */
    passUrl(url) {
        this.url = url;
    }
    /**
     * Function which returns the image url
     */
    getUrl() {
        return this.url;
    }
    /** Function which creates the contact dialog message according 
     * @param error the error content
     */
    openModalContact() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ContactDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => { });
    }
}   