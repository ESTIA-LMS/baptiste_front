import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

    {path: '**', redirectTo: 'public', pathMatch:'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
