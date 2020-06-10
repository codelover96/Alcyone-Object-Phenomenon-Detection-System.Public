import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {

    url: any; //It contains the url of selected image
    image: any //It contains the selected image;

    constructor() { }

    /**
     * Function which gets the selected image url and file
     * @param url the selected image url
     * @param image the selected image file
     */
    passUrl(url, image) {
        this.url = url;
        this.image = image;
    }
    /**
     * Function which returns the image url
     */
    getUrl() {
        return this.url;
    }
    /**
     * Function which returns the image file
     */
    getFile() {
        return this.image;
    }
}   