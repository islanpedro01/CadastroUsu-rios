import { Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { HomeComponent } from './projetos/home/home.component';
import { CadastroComponent } from './projetos/cadastro/cadastro.component';
import { ConsultaComponent } from './projetos/consulta/consulta.component'
import { ContatoComponent } from './complementar/contato/contato.component';
import { SobreComponent } from './complementar/sobre/sobre.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'listagem-usuario', component: ListagemUsuarioComponent },
  { 
    path: 'projetos', 
    component: HomeComponent, 
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'consulta', component: ConsultaComponent }
    ] 
  },
  { path: 'contato', component: ContatoComponent }, 
  { path: 'sobre', component: SobreComponent }     
];
