import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './posts/post/post.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';


const routes: Routes = [{ path: '', component: PostComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
