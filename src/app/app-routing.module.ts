import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ObjectDetectionComponent } from './object-detection/object-detection.component';
import { PhenomenonDetectionComponent } from './phenomenon-detection/phenomenon-detection.component';

const routes: Routes = [
  {path: 'object-detection', component: ObjectDetectionComponent},
  {path: 'phenomenon-detection', component: PhenomenonDetectionComponent},
  //{ path: '',   redirectTo: '/app-component', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
