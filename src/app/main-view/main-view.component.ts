import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainViewService} from './main-view.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnDestroy {

    logo = './assets/logo.png';
    textImage = './assets/text-image.png';
    fileToUpload = null;
    imageUrl = null;
    file = null;
    imageLoaded = false;

    fileName = '';


    options: FormGroup;
    constructor(private router: Router, private service: MainViewService, private http: HttpClient) {}

    ngOnInit(): void {
        this.imageUrl = sessionStorage.getItem('url'); // It gets the imageUrl from the session storage
        this.service.passImageData(this.imageUrl);
    }

    ngOnDestroy() {
        sessionStorage.removeItem('url'); // It deletes the url after end of session
    }

    onFileSelected(event) {

        const file: File = event.target.files[0];

        if (file) {

            this.fileName = file.name;
            const formData = new FormData();
            formData.append('search_image', file);
            console.log(formData.get('search_image'));
            /*const upload$ = this.http.post('/api/thumbnail-upload', formData);
            upload$.subscribe();*/

            this.imageUrl = event.target.result;
            console.log('type of imageUrl is', typeof this.imageUrl);
            // TODO: store images to a db and not in session storage
            sessionStorage.setItem('url', this.imageUrl);
            this.service.passImageData(this.imageUrl);
        }
    }

    /**
     * Opens file chooser after clicking on "Open" choice in menu
     */
    openInput() {
        document.getElementById('fileInput').click();
    }

    /**
     * Get selected image
     * and store it as base64 on session storage
     */
    handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
        const reader = new FileReader();
        this.imageLoaded = true;
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
            console.log('type of imageUrl is', typeof this.imageUrl);
            // TODO: store images to a db and not in session storage
            sessionStorage.setItem('url', this.imageUrl);
            this.service.passImageData(this.imageUrl);
        };
        reader.readAsDataURL(this.fileToUpload);
    }

    /**
     * Closes opened input image
     * removes item from session storage
     * optionally clear all session storage
     */
    closeInput() {
        this.fileToUpload = null;
        this.imageUrl = null;
        sessionStorage.removeItem('url');
        // sessionStorage.clear();
    }

    onClickContact() {
        this.service.openModalContact();
    }
}
