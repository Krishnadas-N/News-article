import { Routes } from '@angular/router';


export const routes: Routes = [
  {
  path:'',
  title:'Home',
  loadComponent:()=>import('./pages/home-page/home-page.component').then(m=>m.HomePageComponent)
  },
  {
    path:'articles',
    title:'Articles',
    loadComponent:()=>import('./pages/articles/articles.component').then(m=>m.ArticlesComponent)
  }
];
