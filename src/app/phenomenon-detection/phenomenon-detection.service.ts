import { Injectable } from '@angular/core';

@Injectable()
export class PhenomenonDetectionService {

    array: boolean[]; // It contains the values of all checkboxes

    constructor() { }

    /**
     * Function which gets the values of checkboxes
     * @param data  // values of checkboxes
     */
    sendArray(data) {
        this.array = data;
    }
    /**
     * Function which returns the values of checkboxes
     */
    getArray() {
        return this.array;
    }
}
