import { Component } from '@angular/core';
import { CardUsuarioComponent } from "../card-usuario/card-usuario.component";
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { SweetAlertService } from '../shared/services/sweet-alert.service';

@Component({
  selector: 'app-listagem-usuario',
  standalone: true,
  imports: [CardUsuarioComponent],
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.css'
})
export class ListagemUsuarioComponent {
  users: User[] = [];

  constructor(private userService: UserService, private sweetAlert: SweetAlertService) {
    userService.listarUsuarios().subscribe({
      next: users => {
        this.users = users;
      }
    });
  }

  excluir(IDUsuario: string) {
    this.users = this.users.filter((u) => u.id !== IDUsuario);
    this.sweetAlert.sucesso('Usuário removido com sucesso!');
    
  
  }

}
