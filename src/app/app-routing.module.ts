import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmallOglasComponent} from './small-oglas/small-oglas.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AddAnnounceComponent} from './add-announce/add-announce.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {EdukativniComponent} from './edukativni/edukativni.component';
import {ItniComponent} from './itni/itni.component';
import {MedicinskiComponent} from './medicinski/medicinski.component';
import {MemoriskiComponent} from './memoriski/memoriski.component';



const routes: Routes = [{path:'index',component:SmallOglasComponent},
{ path: '', redirectTo: 'index', pathMatch: 'full' },
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'add-announce',component:AddAnnounceComponent},
{path:'how-it-works',component:HowItWorksComponent},
{path:'edukativni',component:EdukativniComponent},
{path:'itni',component:ItniComponent},
{path:'medicinski',component:MedicinskiComponent},
{path:'memoriski',component:MemoriskiComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
