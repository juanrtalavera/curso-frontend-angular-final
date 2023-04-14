import { HomeComponent } from './pages/home/home/home.component';
import { ManageComponent } from './pages/manage/manage/manage.component';
import { FilmsComponent } from './pages/films/films/films.component';
import { FileComponent } from './pages/detail/file/file.component';
import { LoginComponent } from './pages/login/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './pages/registrar/registrar/registrar.component';
import { LogoutComponent } from './pages/logout/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { AuthGuard } from './../app/guards/auth.guard';
import { ExitGuard } from './../app/guards/exit.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "films", component: FilmsComponent },
  { path: "film/:id", component: FileComponent },
  { path: "manage", component: ManageComponent, canDeactivate: [ExitGuard]  },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "registrar", component: RegistrarComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }