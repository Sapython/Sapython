import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FullCardComponent } from './full-card/full-card.component';
import { MediumCardComponent } from './medium-card/medium-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FullCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    ProjectCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FullCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    ProjectCardComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
