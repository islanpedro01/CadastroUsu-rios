export class User {
    id?: string;
    nome?: string;
    orcid?: string;
    email?: string;
    telefone?: string;
    senha?: string;
  
    constructor(nome?: string, email?: string, telefone?: string, senha?: string, id?: string, orcid?: string) {  
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.senha = senha;
      this.id = id;
      this.orcid = orcid;
    }
  }
  