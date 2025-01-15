import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { SweetAlertService } from '../shared/services/sweet-alert.service';



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
  

  constructor(private fb: FormBuilder, private userService: UserService, private roteador: Router, private sweetAlert: SweetAlertService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  async onSubmit() {
    this.validar = true;
    try{
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      await this.userService.validarLogin(credentials.email, credentials.password);
      this.roteador.navigate(['/projetos']);    
    }
  }catch(err){
      console.error('Erro no login:', err);
      this.sweetAlert.erro('Usuário ou senha inválidos!');

    }
  
  }
  

}
