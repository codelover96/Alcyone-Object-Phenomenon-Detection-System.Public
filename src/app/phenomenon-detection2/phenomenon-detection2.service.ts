import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PhenomenonResultsDialogMessageComponent} from './phenomenon-results-dialog-message/phenomenon-results-dialog-message.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MainViewService} from '../main-view/main-view.service';
import {PhenomenonWarningDialogMessageComponent} from './phenomenon-warning-dialog-message/phenomenon-warning-dialog-message.component';
import {environment} from '../../environments/environment';

@Injectable()
export class PhenomenonDetection2Service {
    router: Router;
    image: any; // It contains the selected image

    constructor(public dialog: MatDialog, private http: HttpClient, private mainviewService: MainViewService) {
    }

    /**
     * Function which opens the modal message which contains the results of the search
     * @param jsonData the results of search
     */
    openModalResults(jsonData) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = jsonData;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(PhenomenonResultsDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    /**
     * Function which opens the warning modal message in the case of no selected filter/filters
     */
    openModalWarning() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 400;
        const dialogRef = this.dialog.open(PhenomenonWarningDialogMessageComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    /**
     * Function which carries out the post request passing the chosen filters
     * @param content the chosen filters
     */
    postFilters(content): Observable<any> {
        const API_URL = environment.apiUrl;
        const headers = {'content-type': 'application/json'};
        const jsonData = JSON.stringify(content);
        return this.http.post(API_URL + '/phenomenon-detection', jsonData, {headers});
    }


}
