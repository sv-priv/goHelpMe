import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmallOglasComponent} from './small-oglas/small-oglas.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AddAnnounceComponent} from './add-announce/add-announce.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {DonateNowComponent} from './donate-now/donate-now.component';

const routes: Routes = [{path:'index',component:SmallOglasComponent},
{ path: '', redirectTo: 'index', pathMatch: 'full' },
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'add-announce',component:AddAnnounceComponent},
{path:'how-it-works',component:HowItWorksComponent},
{path:'donate-now',component:DonateNowComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
