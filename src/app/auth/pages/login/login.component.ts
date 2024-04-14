import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;

  miFormulario: FormGroup = this.fb.group({
    usuario:['joel', [Validators.required]],
      password:['joel', [Validators.required]]
    })
    
    constructor(private fb: FormBuilder, private router:Router,
      private authService: AuthService) { 

    }
  
  ngOnInit(): void {}
  onSubmit() {
    const usuario = this.miFormulario.value.usuario ?? '';
    const password = this.miFormulario.value.password ?? '';
    const isLoggedIn = this.authService.login(usuario, password);

    if (isLoggedIn) {
      this.login();
    } else {
      this.error();
      this.miFormulario.reset();
    }
  }

  error() {
    
  }

  // login () {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.router.navigate(['./autor']);
  //   }, 1500);
  // }
  
  
    login() { 
       this.router.navigate(['./autor'])
    
     
    }
}
