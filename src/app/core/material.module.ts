import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSliderModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSliderModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        MatGridListModule
    ]
})

export class MaterialModule {
}
