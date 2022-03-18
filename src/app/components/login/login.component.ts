import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loading = false;
   }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    console.log(usuario);
    console.log(password);

    if (usuario == 'camilo' && password =='admin'){
      //Redireccionamos al dashboard
      this.router.navigate(['dashboard']);
      //this.fakeloading();
    } else{
      //Mostramos alerta
      this.Mensajeerror();
      this.form.reset();
    }
  }
  Mensajeerror(){
    this._snackBar.open('Usuario o Contraseña Invalido','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  };

  /*fakeloading(){
    //this.loading= true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }*/
  
  
  
}
