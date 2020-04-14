import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Object } from '../object';

@Injectable()
export class ObjectDetectionService {
    router: Router;
    constructor(public dialog: MatDialog, private http: HttpClient) { }

    openModal(results: Object[], next: Function = null, ok: Function = null, newSearch: Function = null) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = results;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(DialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => { });
    }
    post(json): Observable<any> {

        return this.http.post('https://postman-echo.com/post', json);
    }

}