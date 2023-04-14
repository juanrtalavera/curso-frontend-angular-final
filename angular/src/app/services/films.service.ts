import { FilmsInterface } from './../models/films.interface';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

// Objeto para almacenar los elementos de cada pelicula
  public filmData = {
    title: "",
    author: "",
    company: "",
    cover: "",
    year: "",
    rate: "", 
    id: ""
  }

  public clearFilm() {
    this.filmData = {
    title: "",
    author: "",
    company: "",
    cover: "",
    year: "",
    rate: "", 
    id: ""
    }
  }

  // Setear pelicula
  public editItem(item:any) {
    this.filmData = item
  }
  
  // Recoger peliculas del back
  public getFilms() {
    return this.httpClient.get("http://localhost:4200/films")
  }

  // Editar una película 
  public editFilm(filmID:string, editedFilm:object) {
    return this.httpClient.put("http://localhost:4200/films/" + filmID, editedFilm)
  }

  // Añadir una pelicula enviando un objetivo
  public postFilm(newFilm:object) {
    return this.httpClient.post("http://localhost:4200/films", newFilm)
  }

  // Borrar una pelicula
  public deleteFilm(filmID:string) {
    return this.httpClient.delete("http://localhost:4200/films/" + filmID)
  }

}