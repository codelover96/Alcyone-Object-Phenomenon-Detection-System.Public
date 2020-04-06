import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestResults} from '../request-results';

@Injectable()
export class DialogMessageService {
   
    constructor(private http:HttpClient) { }

    getResults(): Observable<any>{
        return this.http.get('http://localhost:3000/response');
    }
    post(posts:RequestResults): Observable<any>{
        return this.http.post('http://localhost:3000/request',posts);
    }
}