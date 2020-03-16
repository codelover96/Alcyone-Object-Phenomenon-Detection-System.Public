import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObjectDetectionComponent } from './object-detection/object-detection.component';
import { PhenomenonDetectionComponent } from './phenomenon-detection/phenomenon-detection.component';
import { PhenomenonDetection2Component } from './phenomenon-detection2/phenomenon-detection2.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import {ObjectDetectionService} from './object-detection/object-detection.service';

@NgModule({
   declarations: [
      AppComponent,
      ObjectDetectionComponent,
      PhenomenonDetectionComponent,
      PhenomenonDetection2Component,
      DialogMessageComponent
   ],
   imports: [
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      RouterModule
   ],
   providers: [{provide: APP_BASE_HREF, useValue: ''}, ObjectDetectionService],
   bootstrap: [AppComponent],
   entryComponents : [DialogMessageComponent]
})
export class AppModule { }