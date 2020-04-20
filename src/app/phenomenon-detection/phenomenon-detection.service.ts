import { Injectable } from '@angular/core';

@Injectable()
export class PhenomenonDetectionService{

    array:boolean[];

    constructor(){
    
    }
    sendArray(data){
        this.array=data;
    }
    getArray(){
        return this.array;
    }
}