import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmallOglasComponent} from './small-oglas/small-oglas.component'
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [{path:'index',component:SmallOglasComponent},
{ path: '', redirectTo: 'index', pathMatch: 'full' },
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
