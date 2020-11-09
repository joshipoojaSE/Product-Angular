import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { HomeResolver } from './home/home.resolver';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './home/add/add.component';
import { UpdateComponent } from './home/update/update.component';


const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent},
  { path : 'signUp', component: RegisterComponent},
  { path : 'home', component : HomeComponent, resolve : { data : HomeResolver}},
  { path : 'home/add', component : AddComponent},
  {path : 'home/update/:id', component: UpdateComponent},
  { path: '**',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
