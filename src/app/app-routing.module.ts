import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', 
    loadChildren: () => import('@modules/home').then((m) => m.HomeModule)
  },
  {
    path: 'auth', 
    loadChildren: () => import('@modules/auth').then((m) => m.AuthModule)
  },
  { path: '**', redirectTo: '/home',  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
