import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ObjectDetectionComponent } from '../object-detection/object-detection.component';
import { PhenomenonDetectionComponent } from '../phenomenon-detection/phenomenon-detection.component';
import {PhenomenonDetection2Component} from '../phenomenon-detection2/phenomenon-detection2.component';
import {AppComponent} from '../app.component';
import {DetectComponent} from '../detect/detect.component';
import {HomeComponent} from '../home/home.component';
import {MainViewComponent} from '../main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'main', component: MainViewComponent,
    children: [
      {path: '', redirectTo: '/detect', pathMatch: 'full'},
      {path: 'detect', component: DetectComponent},
      {path: 'object-detection', component: ObjectDetectionComponent},
      {path: 'phenomenon-detection', component: PhenomenonDetectionComponent},
      {path: 'phenomenon-detection2', component: PhenomenonDetection2Component}]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
