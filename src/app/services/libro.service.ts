import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  listLibros: Libro[] = [
    {titulo: 'Cien Años de Soledad', autores: 'G. Marquez', isbn: 'AGD3452', numeroPaginas: 1000, editorial: 'Editorial Sudamericana', fechaPublicacion: '1967', fechaRegistro: '1980'},
    {titulo: 'La Voragine', autores: 'J. Eustaquio Rivera', isbn: 'SBN3444', numeroPaginas: 400, editorial: 'Carvajal Ediciones', fechaPublicacion: '1970', fechaRegistro: '1980'},
    {titulo: 'Maria', autores: 'Jorge Isaacs', isbn: 'YER3682', numeroPaginas: 800, editorial: 'Babel Libros', fechaPublicacion: '1999', fechaRegistro: '2000'},
    {titulo: 'Delirio', autores: 'Laura Restrepo', isbn: 'AXR8892', numeroPaginas: 500, editorial: 'Editorial Planeta', fechaPublicacion: '2000', fechaRegistro: '2005'},
    {titulo: 'Maria', autores: 'Jorge Isaacs', isbn: 'YER3682', numeroPaginas: 800, editorial: 'Babel Libros', fechaPublicacion: '1999', fechaRegistro: '2000'},
    {titulo: 'Maria', autores: 'Jorge Isaacs', isbn: 'YER3682', numeroPaginas: 800, editorial: 'Babel Libros', fechaPublicacion: '1999', fechaRegistro: '2000'},
    {titulo: 'Maria', autores: 'Jorge Isaacs', isbn: 'YER3682', numeroPaginas: 800, editorial: 'Babel Libros', fechaPublicacion: '1999', fechaRegistro: '2000'}
  ];
  constructor() { }

  getLibros(){
    return this.listLibros.slice();
  }

  eliminarlibro(index: number){
    this.listLibros.splice(index,1);
  }

  añadirLibro(libro: Libro){
    this.listLibros.unshift(libro);
  }

  obtenerLibroEspecifico(index: number){
    return this.listLibros[index];
  }

 
}
