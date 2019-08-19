import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './posts/post/post.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [{ path: '', component: PostComponent },
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
