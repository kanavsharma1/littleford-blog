import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';


const routes: Routes = [{ path: '', component: AllPostsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
