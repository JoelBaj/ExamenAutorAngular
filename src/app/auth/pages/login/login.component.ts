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
  
  ngOnInit(): void {

  }

  Iniciar() {
    const { usuario, password } = this.miFormulario.value;
    this.authService.login(usuario, password).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
       
        this.router.navigate(['./autor']);
      } else {
        
        alert('Datos incorrectoo');
      }
    });
  }


}
