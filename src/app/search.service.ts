import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    jsonData: null;
    apiURl: string;
    headers: { 'content-type': string };
    constructor() {
        this.apiURl = environment.apiUrl;
        this.headers = {'content-type': 'application/json'};
    }

    /**
     * Posts search query
     * return response as json data
     */
    postSearch(content): Observable<any> {
        console.log('search service: postSearch called');
        // const jsonData = JSON.stringify(content);
        // console.log(content);
        return content;
    }
}
