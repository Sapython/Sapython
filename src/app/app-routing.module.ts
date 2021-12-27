import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customerPanel/main/home/home.component';

const routes: Routes = [
  { 
    path: 'projects', 
    loadChildren: () => import('./customerPanel/main/projects/projects.module').then(m => m.ProjectsModule) 
  },
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'about', 
    loadChildren: () => import('./customerPanel/main/about/about.module').then(m => m.AboutModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./customerPanel/authentication/login/login.module').then(m => m.LoginModule),
    data: { animation: 'isRight' } 
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./customerPanel/authentication/signup/signup.module').then(m => m.SignupModule) 
  },
  { path: 'contact', 
    loadChildren: () => import('./customerPanel/main/contact/contact.module').then(m => m.ContactModule) 
  },
  {
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
