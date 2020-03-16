import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {
  
  modalMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalMessage = data.message;
  }
 
  ngOnInit(): void {
    
  }
  onClick(){

  }

}
