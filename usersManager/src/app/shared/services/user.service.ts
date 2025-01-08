import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL da API no Spring Boot

  constructor(private http: HttpClient) { }

  // Método para cadastrar usuário
  registerUser(user: User): Observable<User> {
    console.log('Enviando dados para o backend:', user);
    return this.http.post<User>(`${this.apiUrl}`, user,{
      headers: { 'Content-Type': 'application/json' } // Garanta que o cabeçalho esteja correto
    });
  }

  buscarUsuarioPorEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${email}`);
  }

  buscarUsuarioPorOrcid(orcid: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${orcid}`);
  }

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }


  remover(usuario: User): Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/${usuario.id}`)
  }

  validarLogin(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
    this.buscarUsuarioPorEmail(email).subscribe({
        next: usuario => {
            if (usuario.senha == password) {
                resolve ();
               
                
            }
            else{
                reject( new Error('Usuário ou senha inválidos'));
                
            }        
        },
        error: () => {
            reject(new Error('Usuário ou senha inválidos'));
        }
    
    });
    });
  
}

}
