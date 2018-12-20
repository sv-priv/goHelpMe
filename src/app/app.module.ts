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
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AddAnnounceComponent } from './add-announce/add-announce.component';
import { DonateNowComponent } from './donate-now/donate-now.component';
import { OglasGenericComponent } from './oglas-generic/oglas-generic.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SmallOglasComponent,
    RegisterComponent,
    LoginComponent,
    OglasFormaComponent,
    FooterComponentComponent,
    HowItWorksComponent,
    AddAnnounceComponent,
    DonateNowComponent,
    OglasGenericComponent
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
