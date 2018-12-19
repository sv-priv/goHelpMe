import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {MaterialModule} from './material.module';
import { SmallOglasComponent } from './small-oglas/small-oglas.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OglasFormaComponent } from './oglas-forma/oglas-forma.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SmallOglasComponent,
    RegisterComponent,
    LoginComponent,
    OglasFormaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
