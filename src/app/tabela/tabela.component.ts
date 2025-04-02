import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  infos: any[] = [];
 
  constructor(private service: ServicoService) { }
 
  ngOnInit(): void {
    this.service.getInfo().subscribe(
      json => this.infos = json
 
    );
  }
}
