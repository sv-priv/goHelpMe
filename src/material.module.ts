import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatToolbarModule, MatCheckboxModule],
  exports: [MatButtonModule,MatToolbarModule, MatCheckboxModule],
})
export class MaterialModule { }
