import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateComponent
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }, // TODO: pathMatch: 'full'???
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
