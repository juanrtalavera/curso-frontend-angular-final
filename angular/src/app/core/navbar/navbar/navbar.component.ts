import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any = null

constructor(private authService: AuthService,  private router: Router){}

  ngOnInit(): void {
    
    // Actualizar el login

    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.user = this.authService.getUser()
      }
    })
   
  }




}