import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-usuario',
  standalone: true,
  imports: [],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {
  @Input() user!: User;
  @Output() userRemoved = new EventEmitter<string>();

  constructor(private userService: UserService, private roteador:Router){}

  excluir(userRemov: User) {
    this.userService.remover(userRemov).subscribe({
      next: user => this.userRemoved.emit(userRemov.id)
      
      }
    );
}
}
