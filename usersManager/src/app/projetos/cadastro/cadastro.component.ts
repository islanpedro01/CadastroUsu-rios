import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <--- Importa o FormsModule
import { CommonModule } from '@angular/common';  // Importe o CommonModule

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  // Variáveis de controle das etapas
  currentStep = 1;

  // Variáveis para armazenar os dados do formulário
  nomeProjeto: string = '';
  problema: string = '';
  abordagem: string = '';
  proposito: string = '';
  metodologia: string = '';
  tema: string = '';
  contexto: string = '';
  autores: string = '';
  tipo: string = '';
  descricao: string = '';
  data: string = '';
  descicao: string = '';
  resumo: string = '';
  questionario: string = '';
  formulario: string = '';
  
  // Variáveis das novas etapas
  planejamento: string = '';
  localFigura: string = '';
  descricaoFigura: string = '';
  nomeVariavel: string = '';
  tipoVariavel: string = '';
  localVariavel: string = '';
  idCenario: string = '';
  idParametro: string = '';
  tipoParametro: string = '';
  nomeParametro: string = '';
  descricaoTecnica: string = '';
  linkDescricao: string = '';

  // Função para avançar para a próxima etapa
  nextStep() {
    if (this.currentStep < 8) {
      this.currentStep++;
    }
  }

  // Função para voltar para a etapa anterior
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Função para submeter o formulário
  onSubmit() {
    // Aqui você pode processar os dados do formulário (salvar no banco de dados, etc)
    alert('Formulário enviado com sucesso!');
  }
}
