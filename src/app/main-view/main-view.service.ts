import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {

    url;

    constructor() {}


    passUrl(url){
        this.url=url;
    }
    getUrl(){
        return this.url;
    }
    
}
