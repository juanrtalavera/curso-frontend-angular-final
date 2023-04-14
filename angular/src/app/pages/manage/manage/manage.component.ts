import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmsService } from './../../../services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
 
  public filmForm!: FormGroup; 
  public newFilm = this.FilmsService.filmData;
  public filmID = this.FilmsService.filmData.id;

  constructor(private formBuilder: FormBuilder, private FilmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
  // Limpiar el form y construirlo
    this.FilmsService.clearFilm();
    this.filmForm = this.formBuilder.group({
      title: [this.newFilm.title, [Validators.required]],
      cover: [this.newFilm.cover, [Validators.required]], 
      company: [this.newFilm.company,[Validators.required]],
      year:[this.newFilm.year, [Validators.required]], 
      author: [this.newFilm.author, [Validators.required]],
      rate:[this.newFilm.rate, [Validators.required]] 
    })

    this.filmForm.valueChanges.subscribe((changes) => {
      this.newFilm = changes;
      // console.log(this.newFilm)
    })
  }

  // Definir qué se ejecuta al enviar el form
  public onSubmit() {
    if (this.filmID !== "") {
      this.FilmsService.editFilm(this.filmID, this.newFilm).subscribe();
      alert("Has editado una pelicula")
    } else {
      this.FilmsService.postFilm(this.newFilm).subscribe();
      alert("Se ha añadido correctamente")
    }

    this.filmForm.reset();

    this.router.navigate(["/films"])
  }

  public delete() {
    this.FilmsService.deleteFilm(this.filmID).subscribe();
    this.filmForm.reset();
    alert("Has eliminado una pelicula");
    this.router.navigate(["/films"])
  }

}