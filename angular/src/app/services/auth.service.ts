import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(email: string, pwd: string): Observable<any>{
    return this.http.post("http://localhost:4200/login",
    {
      email:email,
      password:pwd 
    })
  }

  registrar(email: string, pwd: string){
    return this.http.post("http://localhost:4200/register", 
    {
      email: email,
      password: pwd,
    }
    )
  }

  cambiarEmail(userId:number, nombrenuevo:string){
    return this.http.patch(`http://localhost:4200/users/${userId}`, {firstname: nombrenuevo})
  }

  logout(){
    this.cookies.delete("user");
  }
  
  setUser(user: any){
    this.cookies.set("user",JSON.stringify(user))
  }

  getUser(){
    try {
      return JSON.parse(this.cookies.get("user"))
    } catch (error) {
      return null
    }
  }

  connected():boolean{
    return this.cookies.check("user")
  }
}