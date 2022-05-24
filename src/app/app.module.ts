import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing.module';
import { CasasGotComponent } from './casas-got/casas-got.component';
import { SerieComponent } from './serie/serie.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CadastroComponent,
    RodapeComponent,
    CasasGotComponent,
    SerieComponent,
    HomeComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
