import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Libro } from 'src/app/interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';
import { LibrosComponent } from '../libros.component';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  indice!: number;
  form: FormGroup;
  constructor(private fb: FormBuilder, private _libroService: LibroService, private router: Router,  private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      autores: ['', Validators.required],
      isbn: ['', Validators.required],
      numeroPaginas: ['', Validators.required],
      editorial: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      fechaRegistro: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  AgregarLibro(){
    console.log(this.form);

    const libro: Libro = {
      titulo: this.form.value.titulo,
      autores: this.form.value.autores,
      isbn: this.form.value.isbn,
      numeroPaginas: this.form.value.numeroPaginas,
      editorial: this.form.value.editorial,
      fechaPublicacion: this.form.value.fechaPublicacion,
      fechaRegistro: this.form.value.fechaRegistro
    }
    

    this._libroService.añadirLibro(libro);
    this.router.navigate(['/dashboard/libros']);
    this._snackBar.open('El libro fue agregado','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /*cargarLibroEdicion(index: number){
    this._libroService.obtenerLibroEspecifico(index).titulo; //Obtiene el libro segun su index del arreglo
    this.form = this.fb.group({
      titulo: ['this._libroService.obtenerLibroEspecifico(index).titulo', Validators.required],
      autores: ['this._libroService.obtenerLibroEspecifico(index).autores', Validators.required],
      isbn: ['this._libroService.obtenerLibroEspecifico(index).isbn', Validators.required],
      numeroPaginas: ['this._libroService.obtenerLibroEspecifico(index).numeroPaginas', Validators.required],
    })
  }*/
}
