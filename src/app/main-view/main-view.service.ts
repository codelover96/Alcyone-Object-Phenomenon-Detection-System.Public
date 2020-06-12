import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {

    url: any; //It contains the url of selected image

    constructor() { }

    /**
     * Function which gets the selected image url and file
     * @param url the selected image url
     * @param image the selected image file
     */
    passUrl(url) {
        this.url = url;
    }
    /**
     * Function which returns the image url
     */
    getUrl() {
        return this.url;
    }
}   