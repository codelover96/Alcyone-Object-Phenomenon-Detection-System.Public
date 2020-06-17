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
import { ObjectResultsDialogMessageComponent } from './object-detection/object-results-dialog-message/object-results-dialog-message.component';
import {PhenomenonResultsDialogMessageComponent} from './phenomenon-detection2/phenomenon-results-dialog-message/phenomenon-results-dialog-message.component';
import {ObjectDetectionService} from './object-detection/object-detection.service';
import {PhenomenonDetection2Service} from './phenomenon-detection2/phenomenon-detection2.service';
import {PhenomenonDetectionService} from './phenomenon-detection/phenomenon-detection.service';
import {DetectComponent} from './detect/detect.component';
import { HomeComponent } from './home/home.component';
import { MainViewComponent } from './main-view/main-view.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {MainViewService} from './main-view/main-view.service';
import { ObjectWarningDialogMessageComponent } from './object-detection/object-warning-dialog-message/object-warning-dialog-message.component';
import { DetectWarningDialogMessageComponent } from './detect/detect-warning-dialog-message/detect-warning-dialog-message.component';
import { DetectService } from './detect/detect.service';
import { PhenomenonWarningDialogMessageComponent } from './phenomenon-detection2/phenomenon-warning-dialog-message/phenomenon-warning-dialog-message.component';
import { ContactDialogMessageComponent } from './main-view/contact-dialog-message/contact-dialog-message.component';

@NgModule({
   declarations: [
      AppComponent,
      ObjectDetectionComponent,
      PhenomenonDetectionComponent,
      PhenomenonDetection2Component,
      ObjectResultsDialogMessageComponent,
      PhenomenonResultsDialogMessageComponent,
      DetectComponent,
      HomeComponent,
      MainViewComponent,
      FooterComponent,
      ObjectWarningDialogMessageComponent,
      DetectWarningDialogMessageComponent,
      PhenomenonWarningDialogMessageComponent,
      ContactDialogMessageComponent
      
   ],
   imports: [
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      RouterModule,
      HttpClientModule
   ],
   providers: [{provide: APP_BASE_HREF, useValue: ''}, ObjectDetectionService, PhenomenonDetectionService, PhenomenonDetection2Service,
   DetectService, MainViewService],
   bootstrap: [AppComponent],
   entryComponents : [ObjectResultsDialogMessageComponent,PhenomenonResultsDialogMessageComponent, DetectWarningDialogMessageComponent, 
      ObjectWarningDialogMessageComponent, PhenomenonWarningDialogMessageComponent]
})
export class AppModule { 
   
}