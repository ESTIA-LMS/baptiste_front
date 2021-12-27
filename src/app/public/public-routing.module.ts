import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: '', redirectTo: 'accueil', pathMatch:'full'},
    {path: 'accueil', component: HomeComponent},
    {path: 'formations', component: FormationsComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: 'accueil', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
