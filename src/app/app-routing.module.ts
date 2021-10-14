import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customerPanel/main/home/home.component';

const routes: Routes = [
  { path: 'projects', loadChildren: () => import('./customerPanel/main/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./customerPanel/main/about/about.module').then(m => m.AboutModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
