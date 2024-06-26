import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SelecaoComponent } from './pages/selecao/selecao.component';
import { GraficosComponent } from './pages/graficos/graficos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'selecao' },
  { path: 'login', component: LoginComponent},
  { path: 'selecao', component: SelecaoComponent},
  { path: 'dashboard', component: GraficosComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
