import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';


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
  usuario: User = new User();

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.validar = true;
    if (this.registerForm.valid) {
      this.usuario = this.registerForm.value;
      this.usuario.id = '1'; // O ID é gerado automaticamente pelo backend
      console.log('Dados do formulário:', this.usuario);
      this.userService.registerUser(this.usuario).subscribe({
        next: () => {
          console.log('Usuário cadastrado com sucesso:', this.usuario);
          // Lógica após cadastro bem-sucedido (e.g., redirecionar para a tela de login)
        },
        error: (err) => {
          console.error('Erro no cadastro:', err);
          // Exibir mensagem de erro
        }
    });
    }
  }
}
