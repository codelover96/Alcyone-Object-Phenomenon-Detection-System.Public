import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObjectDetectionComponent } from './object-detection/object-detection.component';
import { PhenomenonDetectionComponent } from './phenomenon-detection/phenomenon-detection.component';
import { PhenomenonDetection2Component } from './phenomenon-detection2/phenomenon-detection2.component';
import { DialogMessageComponent } from './object-detection/dialog-message/dialog-message.component';
import {DialogMessage2Component} from './phenomenon-detection2/dialog-message2/dialog-message2.component';
import {ObjectDetectionService} from './object-detection/object-detection.service';
import {PhenomenonDetection2Service} from './phenomenon-detection2/phenomenon-detection2.service';
import {PhenomenonDetectionService} from './phenomenon-detection/phenomenon-detection.service';
import {DetectComponent} from './detect/detect.component';
import { HomeComponent } from './home/home.component';
import { MainViewComponent } from './main-view/main-view.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import {MainViewService} from './main-view/main-view.service';

@NgModule({
   declarations: [
      AppComponent,
      ObjectDetectionComponent,
      PhenomenonDetectionComponent,
      PhenomenonDetection2Component,
      DialogMessageComponent,
      DialogMessage2Component,
      DetectComponent,
      HomeComponent,
      MainViewComponent,
      FooterComponent
      
   ],
   imports: [
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      MatIconModule
   ],
   providers: [{provide: APP_BASE_HREF, useValue: ''}, ObjectDetectionService, PhenomenonDetectionService, PhenomenonDetection2Service, MainViewService],
   bootstrap: [AppComponent],
   entryComponents : [DialogMessageComponent,DialogMessage2Component]
})
export class AppModule { 
   
}