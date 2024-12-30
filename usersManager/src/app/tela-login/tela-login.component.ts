import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../shared/services/user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './tela-login.component.html',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  loginForm: FormGroup;
  validar: boolean = false;
  

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    this.validar = true;
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.userService.loginUser(credentials).subscribe(
        (response) => {
          console.log('Login realizado:', response);
          // Lógica após login bem-sucedido (e.g., redirecionar para página principal)
        },
        (error) => {
          console.error('Erro no login:', error);
          // Exibir mensagem de erro
        }     
      );
  }
  }

}
