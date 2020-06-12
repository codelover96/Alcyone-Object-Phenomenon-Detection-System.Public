import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ObjectResultsDialogMessageComponent } from './object-results-dialog-message/object-results-dialog-message.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MainViewService} from '../main-view/main-view.service';
import { ObjectWarningDialogMessageComponent } from './object-warning-dialog-message/object-warning-dialog-message.component';

@Injectable()
export class ObjectDetectionService {
    router: Router;
    image: any; //It contains the selected image
    size:string; //It contains the specific size which user has given
    shape:string; //It contains the specific shape which user has given

    constructor(public dialog: MatDialog,private http: HttpClient, private mainviewService : MainViewService) {}

    /**
     * Function which opens the modal message which contains the results of the search
     * @param jsonData the results of search
     */
    openModalResults(jsonData,width,height,shape) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {"json":jsonData, "specificWidth":width, "specificHeight":height, "specificShape":shape}; 
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ObjectResultsDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => { });
    }
    /**
     * Function which opens the warning modal message in the case of no selected filter/filters
     */
    openModalWarning(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ObjectWarningDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => { });
    }
    /**
     * Function which carries out the post request passing the chosen filters and the image
     * @param content the chosen filters
     */
    postFilters(content): Observable<any>{
        const headers = {'content-type':'application/json'}; 
        const jsonData=JSON.stringify(content);
        return this.http.post('${environment.apiUrl}/object-detection',jsonData,{'headers':headers});
    }
    
}