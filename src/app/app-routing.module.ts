import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

import { MenuComponent } from './layout/menu/menu.component';

const routes: Routes = [
  
  {path:'',  component: MenuComponent , children: [

    {
      path : 'public', loadChildren: () => import('./public/public.module')
        .then(m=> m.PublicModule)
    },

    {
      path : 'auth', loadChildren: () => import('./auth/auth.module')
        .then(m=> m.AuthModule)
    },

    {
      path : 'user', loadChildren: () => import('./etudiant/etudiant.module')
        .then(m=> m.EtudiantModule), canActivate:[AuthGuard]
    },

    {path: '**', redirectTo: 'public', pathMatch:'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
