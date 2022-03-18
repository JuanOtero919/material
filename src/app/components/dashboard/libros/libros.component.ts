import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Libro } from 'src/app/interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';





@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  listLibros: Libro[] = []

  displayedColumns: string[] = ['titulo', 'autores', 'isbn', 'numeroPaginas', 'editorial', 'fechaPublicacion', 'fechaRegistro', 'acciones'];
  
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private libroService: LibroService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarLibro();
  }

  cargarLibro(){
    this.listLibros = this.libroService.getLibros();
    this.dataSource = new MatTableDataSource(this.listLibros);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarLibro(index: number){
    console.log(index);
    this.libroService.eliminarlibro(index);
    this.cargarLibro();

    this._snackBar.open('El libro fue eliminado','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  editLibro(index: number){
    
    
  }
}
