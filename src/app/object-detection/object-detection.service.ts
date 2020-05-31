import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogMessageComponent } from '../object-detection/dialog-message/dialog-message.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MainViewService} from '../main-view/main-view.service';

@Injectable()
export class ObjectDetectionService {
    router: Router;
    file;

    constructor(public dialog: MatDialog,private http: HttpClient, private mainviewService : MainViewService) {}

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
        //const headers = {'content-type': 'application/json'}
        this.file=this.mainviewService.getFile();
        const headers = {'content-type': 'multipart/form-data'};
        const jsonData=JSON.stringify(content);
        let formdata: FormData = new FormData();
        formdata.append('object',jsonData);
        formdata.append('file',this.file);
        return this.http.post('${environment.apiUrl}/object-detection',jsonData,{'headers':headers});
    }

}