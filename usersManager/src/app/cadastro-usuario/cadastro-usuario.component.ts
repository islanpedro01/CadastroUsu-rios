import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './cadastro-usuario.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  registerForm: FormGroup;
  validar: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      matricula : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.validar = true;
    if (this.registerForm.valid) {
      console.log('Usuário cadastrado:', this.registerForm.value);
    }
  }
}
