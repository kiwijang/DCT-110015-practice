import { CreateComponent } from './../create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' }, // TODO: pathMatch: 'full'???
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
