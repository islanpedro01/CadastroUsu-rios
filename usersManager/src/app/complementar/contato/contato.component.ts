import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <--- Importa o FormsModule
import { CommonModule } from '@angular/common';  // Importe o CommonModul
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  constructor(private router: Router) {}
  
    navigateTo(route: string) {
      this.router.navigate([`/projetos/${route}`]);
    }
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  onSubmit() {
    if (this.nome && this.email && this.mensagem) {
      alert('Feedback enviado com sucesso!');
      // Aqui você pode integrar com o serviço de backend para enviar os dados
      console.log(this.nome, this.email, this.mensagem);
      // Limpar os campos após o envio
      this.nome = '';
      this.email = '';
      this.mensagem = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
