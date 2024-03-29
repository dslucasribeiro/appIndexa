import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email":"ana@gmail.com"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235", "email":"agata@gmail.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email":"bruno@gmail.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email":"beatriz@gmail.com"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email":"carlos@gmail.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email":"daniel@gmail.com"},
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || this.contatos;

    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
