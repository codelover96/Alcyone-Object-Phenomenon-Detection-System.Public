import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogMessage2Component} from './dialog-message2/dialog-message2.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class PhenomenonDetection2Service{
    router:Router;

    constructor(public dialog: MatDialog,private http: HttpClient) { }

    /**
     * Function which opens the modal message which contains the results of the search
     * @param jsonData the results of search
     */
    openModal(jsonData) {
        const dialogConfig=new MatDialogConfig();
        dialogConfig.autoFocus=true;
        dialogConfig.data=jsonData;
        dialogConfig.minWidth=400;
        const dialogRef=this.dialog.open(DialogMessage2Component, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {});
    }
    /**
     * Function which carries out the post request passing the chosen filters
     * @param content the chosen filters
     */
    postFilters(content): Observable<any>{
      const headers = { 'content-type': 'application/json'}  
      const jsonData=JSON.stringify(content);
      return this.http.post('http://localhost:5000/api/phenomenon-detection',jsonData,{'headers':headers});
    }
    

}