import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatGridListModule,MatInputModule,MatIconModule,MatProgressSpinnerModule,MatMenuModule,MatRippleModule,MatRadioModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatToolbarModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatInputModule,MatIconModule,BrowserAnimationsModule,MatProgressSpinnerModule,MatMenuModule,MatRippleModule,MatRadioModule],
  exports: [MatButtonModule,MatToolbarModule, MatCheckboxModule,MatCardModule,MatGridListModule,MatInputModule,MatIconModule,BrowserAnimationsModule,MatProgressSpinnerModule,MatMenuModule,MatRippleModule,MatRadioModule],
})
export class MaterialModule { }
