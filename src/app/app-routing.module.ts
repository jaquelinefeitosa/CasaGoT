import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './autor/autor.component';
import { SerieComponent } from './serie/serie.component';
import { CasasGotComponent } from './casas-got/casas-got.component';


const routes: Routes = [

  {path: "", redirectTo: "serie", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "links", component: HomeComponent},
  {path: "autor", component: AutorComponent},
  {path: "serie", component: SerieComponent},
  {path: "casas-got", component: CasasGotComponent},
  {path: "cadastro", component: CadastroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }