import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagemVisivel: boolean = true; // Controle da visibilidade da imagem

  constructor(private router: Router) {
    // Detecta a navegação para a página home e exibe a imagem
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/home') {
        this.imagemVisivel = true; // Exibe a imagem quando for para a home
      }
    });
  }

  // Método de navegação para outras páginas, esconde a imagem
  navigateTo(route: string) {
    this.imagemVisivel = false;  // Esconde a imagem ao clicar nos botões de navegação
    this.router.navigate([`/projetos/${route}`]);
  }
}
