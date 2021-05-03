import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-object-warning-dialog-message',
    templateUrl: './object-warning-dialog-message.component.html',
    styleUrls: ['./object-warning-dialog-message.component.css']
})
export class ObjectWarningDialogMessageComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ObjectWarningDialogMessageComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
    }

    /**
     * Function which closes the dialog message after click on the button
     */
    onClick() {
        this.dialogRef.close();
    }
}
