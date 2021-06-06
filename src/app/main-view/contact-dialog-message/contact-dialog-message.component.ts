import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../core/material.module';

@Component({
    selector: 'app-contact-dialog-message',
    templateUrl: './contact-dialog-message.component.html',
    styleUrls: ['./contact-dialog-message.component.css'],
})

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule
    ],
    exports: []
})

export class ContactDialogMessageComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ContactDialogMessageComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
    }

    /**
     * Function which closes the dialog message after click on the button
     */
    /*onClick() {
        this.dialogRef.close();
    }*/

    onClickOK() {
        this.dialogRef.close();
    }
}
