import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Object} from '../object';
import {Phenomenon} from '../phenomenon';

@Injectable()
export class DialogMessageService {
   
    constructor(private http:HttpClient) { }

    getResults(): Observable<any>{
        return this.http.get('http://localhost:3000/object/request');
    }
    
    /*post(posts:RequestResults): Observable<any>{
        
        return this.http.post('http://localhost:3000/request',posts);
    }*/
}