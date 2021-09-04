import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
