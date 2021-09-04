import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',  // TODO: 非空字串路由放上面，js 由上往下讀
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '', // TODO: http://localhost:4200/
    component: LayoutComponent,
    children: [
      {
        path: '', // TODO: http://localhost:4200/(module內路由路徑)
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
