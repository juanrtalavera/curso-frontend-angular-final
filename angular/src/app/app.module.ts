import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar/navbar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FilmsComponent } from './pages/films/films/films.component';
import { ManageComponent } from './pages/manage/manage/manage.component';

import { FilterPipe } from './pipes/filter.pipe';
import { FileComponent } from './pages/detail/file/file.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar/registrar.component';
import { LogoutComponent } from './pages/logout/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FilmsComponent,
    ManageComponent,
    FilterPipe,
    FileComponent,
    LoginComponent,
    RegistrarComponent,
    LogoutComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
