import { ESideComponent } from './e-side/e-side.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { BlogComponent } from './modules/blog/blog.component';
import { Article } from './models/Article';
import { ArticleService } from "./services/article.service";
import { ArticlesResolverService } from "./services/ArticlesResolverService";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'e-side', component: ESideComponent },
  {
    path: 'default',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }
      , {
      path: 'Blog',
      component: BlogComponent
    }]
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'Blog',
        component: BlogComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
