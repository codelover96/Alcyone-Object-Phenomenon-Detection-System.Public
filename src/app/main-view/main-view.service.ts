import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {

    url;
    file;

    constructor() {}

    passUrl(url,file){
        this.url=url;
        this.file=file;
    }

    getUrl(){
        return this.url;
    }
    getFile(){
        return this.file;
    }
}   