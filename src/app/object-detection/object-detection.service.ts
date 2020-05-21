import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogMessageComponent } from '../object-detection/dialog-message/dialog-message.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObjectDetectionService {
    router: Router;

    constructor(public dialog: MatDialog,private http: HttpClient) {}

    /**
     * Function which opens the modal message which contains the results of the search
     * @param jsonData the results of search
     */
    openModal(jsonData) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = jsonData; 
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(DialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => { });
    }
    /**
     * Function which carries out the post request passing the chosen filters
     * @param content the chosen filters
     */
    postFilters(content): Observable<any>{
        const headers = { 'content-type': 'application/json'}  
        const jsonData=JSON.stringify(content);
        return this.http.post('http://localhost:5000/api/object-detection',jsonData,{'headers':headers});
    }

}