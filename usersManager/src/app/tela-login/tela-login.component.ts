import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    this.validar = true;
    if (this.loginForm.valid) {
      console.log('Login realizado:', this.loginForm.value);
    }
  }


}
