import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path:'', component: MainPageComponent
  },
  {
    path: 'auth',
    loadChildren: ()=> import('../app/auth/auth.module').then(m=>m.AuthModule)
  },
  { //Cualquier otra ruta que no este definida en mi routing module quiero que redirija a home
    path:'**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
