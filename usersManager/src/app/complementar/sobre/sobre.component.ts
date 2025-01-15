import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  constructor(private router: Router) {}
  
  navigateTo(route: string) {
    this.router.navigate([`/projetos/${route}`]);
  }
}
