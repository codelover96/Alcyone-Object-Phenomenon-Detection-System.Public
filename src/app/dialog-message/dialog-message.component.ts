import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { DialogMessageService } from './dialog-message.service';
import {ResponseResults} from '../response-results';
import {RequestResults} from '../request-results';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {
  
  modalMessage: string;
  response:ResponseResults[];
  request:RequestResults;

  constructor(public dialogRef: MatDialogRef<DialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _messageService:DialogMessageService) {
    this.modalMessage = data.message;
  }
 
  ngOnInit(): void {
    this._messageService.getResults().subscribe(data=>{
      this.response=data;
    });
    var posts= new RequestResults();
    posts.role='admin';
    posts.object_title='box';
    this._messageService.post(posts).toPromise().then(data=>{
      this.request=data;
    })
  }
  onClickNext(){
    
  }
  onClickOK(){
    this.dialogRef.close();
  }
}
