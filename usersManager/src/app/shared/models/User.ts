export class User {
    id?: string;
    nome?: string;
    email?: string;
    telefone?: string;
    senha?: string;
  
    constructor(nome?: string, email?: string, telefone?: string, senha?: string, id?: string) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.senha = senha;
      this.id = id;
    }
  }
  