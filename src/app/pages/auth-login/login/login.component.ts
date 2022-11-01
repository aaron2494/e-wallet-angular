import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  @Input() error!: string ;
  @Output() submitEM = new EventEmitter();

  user = {
    email:'',
    password:''
  }
  constructor() { }

  form: FormGroup = new FormGroup({
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  logIn() {
    if (this.form.valid){
      this.user=this.form.value; 
      Swal.fire({//Muestra una alerta de exito
        icon: 'success',
        title: 'Login success',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(this.form.value);
     
    }else{ 
      Swal.fire({
      title: 'Error!',
      text: 'Datos incorrectos',
      icon: 'error',
      confirmButtonText: 'Reintentar'
    })
      
    }

  }
  
}
