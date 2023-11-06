import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatNativeDateModule} from "@angular/material/core";
import {MatBadgeModule} from "@angular/material/badge";
import {MatStepperModule} from "@angular/material/stepper";
import { AccordionDirective } from './components/accordion/accordion.directive';
import {AccordionAnchorDirective} from './components/accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './components/accordion/accordionlink.directive';
import {NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER , PB_DIRECTION} from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: '#ffffff',
  textPosition: 'center-center',
  pbColor: 'blue',
  bgsColor: 'blue',
  fgsColor:'blue',
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
};

const MaterialModules = [
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTabsModule,
  MatIconModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatGridListModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSliderModule,
  MatChipsModule,
  MatBadgeModule,
  MatStepperModule
];

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    CommonModule,
    MaterialModules,
    SharedRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  exports: [
    MaterialModules,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  providers: []
})
export class SharedModule {
}
