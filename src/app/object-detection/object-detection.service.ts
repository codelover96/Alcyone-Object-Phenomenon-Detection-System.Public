import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ObjectResultsDialogMessageComponent} from './object-results-dialog-message/object-results-dialog-message.component';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MainViewService} from '../main-view/main-view.service';
import {ObjectWarningDialogMessageComponent} from './object-warning-dialog-message/object-warning-dialog-message.component';
import {environment} from '../../environments/environment';
import {SearchService} from '../search.service';

@Injectable()
export class ObjectDetectionService {
    router: Router;
    image: any; // It contains the selected image
    size: string; // It contains the specific size which user has given
    shape: string; // It contains the specific shape which user has given
    // TODO do i need the mainViewService import?
    constructor(public dialog: MatDialog, private http: HttpClient, private mainviewService: MainViewService, private searchService: SearchService) {
    }

    /**
     * Opens a modal message containing search results
     * @param jsonData search results as json
     * @param width image width
     * @param height image height
     * @param shape object shape
     */
    openModalResults(jsonData, width, height, shape) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {json: jsonData, specificWidth: width, specificHeight: height, specificShape: shape};
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ObjectResultsDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    /**
     * Opens a warning modal message in case of no selected filters
     */
    openModalWarning() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(ObjectWarningDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    /**
     * Carries out a post request, passing chosen filters and image
     * @param content the chosen filters
     */
    postFilters(content): Observable<any> {
        const API_URL = environment.apiUrl;
        const headers = {'content-type': 'application/json'};
        const jsonData = JSON.stringify(content);
        const result = this.searchService.postSearch(jsonData);
        return this.http.post(API_URL + '/object-detection', jsonData, {headers});
    }
}
