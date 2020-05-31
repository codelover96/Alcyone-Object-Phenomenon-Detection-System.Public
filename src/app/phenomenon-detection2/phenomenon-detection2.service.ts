import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogMessage2Component} from './dialog-message2/dialog-message2.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MainViewService} from '../main-view/main-view.service'

@Injectable()
export class PhenomenonDetection2Service{
    router:Router;
    file;

    constructor(public dialog: MatDialog,private http: HttpClient, private mainviewService :MainViewService) { }

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
      //const headers = {'content-type': 'application/json'}
      this.file=this.mainviewService.getFile();
      console.log(this.file);
      const headers = {'content-type': 'multipart/form-data'};
      const jsonData=JSON.stringify(content);
      let formdata: FormData = new FormData();
      formdata.append('phenomenon',jsonData);
      formdata.append('file',this.file);
      return this.http.post('${environment.apiUrl}/phenomenon-detection',jsonData,{'headers':headers});
    }
    

}