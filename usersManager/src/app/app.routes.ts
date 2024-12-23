import { Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login', component: TelaLoginComponent},
    {path:'cadastro-usuario', component: CadastroUsuarioComponent}

];
