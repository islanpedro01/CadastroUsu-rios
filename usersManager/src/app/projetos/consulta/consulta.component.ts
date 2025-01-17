import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Project {
  grupo: string;
  subgrupo: string;
  informacao: string;
}

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  projetos = [
    {
      nome: 'Projeto 1',
      problema: 'Problema do projeto 1',
      abordagem: 'Abordagem do projeto 1',
      proposito: 'Proposito do projeto 1',
      metodologia: 'Metodologia do projeto 1',
      tema: 'Tema do projeto 1',
      contexto: 'Contexto do projeto 1',
      autores: 'Autor 1, Autor 2',
      tipo: 'Tipo do projeto 1',
      descricao: 'Descrição do projeto 1',
      data: '01/01/2025',
      objetivo: 'Objetivo do projeto 1',
      descricaoObjetivo: 'Descrição do objetivo do projeto 1',
      questionario: 'https://link-do-questionario.com',
      formulario: 'https://link-do-formulario.com',
      resumo: 'Resumo do projeto 1',
      localFigura: 'Local da figura 1',
      descricaoFigura: 'Descrição da figura 1',
      nomeVariavel: 'Variável 1',
      tipoVariavel: 'Tipo da variável 1',
      localVariavel: 'Local da variável 1',
      idCenario: 'Cenário 1',
      idParametro: 'Parametro 1',
      tipoParametro: 'Tipo do parâmetro 1',
      nomeParametro: 'Nome do parâmetro 1',
      descricaoTecnica: 'Descrição técnica do parâmetro 1',
      linkDescricao: 'https://link-descricao.com'
    },
    {
      nome: 'Projeto 2',
      problema: 'Problema do projeto 2',
      abordagem: 'Abordagem do projeto 2',
      proposito: 'Proposito do projeto 2',
      metodologia: 'Metodologia do projeto 2',
      tema: 'Tema do projeto 2',
      contexto: 'Contexto do projeto 2',
      autores: 'Autor 3, Autor 4',
      tipo: 'Tipo do projeto 2',
      descricao: 'Descrição do projeto 2',
      data: '01/02/2025',
      objetivo: 'Objetivo do projeto 2',
      descricaoObjetivo: 'Descrição do objetivo do projeto 2',
      questionario: 'https://link-do-questionario2.com',
      formulario: 'https://link-do-formulario2.com',
      resumo: 'Resumo do projeto 2',
      localFigura: 'Local da figura 2',
      descricaoFigura: 'Descrição da figura 2',
      nomeVariavel: 'Variável 2',
      tipoVariavel: 'Tipo da variável 2',
      localVariavel: 'Local da variável 2',
      idCenario: 'Cenário 2',
      idParametro: 'Parametro 2',
      tipoParametro: 'Tipo do parâmetro 2',
      nomeParametro: 'Nome do parâmetro 2',
      descricaoTecnica: 'Descrição técnica do parâmetro 2',
      linkDescricao: 'https://link-descricao2.com'
    }
  ];
searchText: any;

}
