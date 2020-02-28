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
import { DetectionComponent } from './detection/detection.component';
import { PhenomenonDetectionComponent } from './phenomenon-detection/phenomenon-detection.component';

@NgModule({
   declarations: [
      AppComponent,
      ObjectDetectionComponent,
      DetectionComponent,
      PhenomenonDetectionComponent
   ],
   imports: [
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      RouterModule
   ],
   providers: [{provide: APP_BASE_HREF, useValue: ''}],
   bootstrap: [AppComponent]
})
export class AppModule { }