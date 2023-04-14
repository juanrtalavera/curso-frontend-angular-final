import { Component } from '@angular/core';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  email: string = ""
  pwd: string = ""


  constructor(private authService: AuthService){}

  registrar(){
    this.authService.registrar(
      this.email,
      this.pwd,
      ).subscribe(data=>{ alert('¡Ya formas parte de CnC!')},
    error=>{ alert('Error. Prueba otra vez')})
  }

}
