import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService{

    url:string;

    constructor(){}

    passPictureUrl(url){
       this.url=url;
       console.log('pass');
    }
    getPictureUrl(){
        console.log(this.url);
        return this.url;
    }
}