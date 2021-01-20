import { UtilService } from './../app/services/util.service';
import { SonhoDto } from 'src/models/sonhoDto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class Dreams {
  id: string;
  descricaoSonho: string;
  private: boolean;
  // status: string;
  Status: string;
  nomeSonhador = '';
  idSonhador: string;
  // ehEdicao = false;
}

const status = {
  Realizado: "5ff5d1f9bc37d0301e98ce5c",
  Em_Progresso: "5ff5d2b6bc37d0301e98ce5d"
}


@Component({
  selector: 'app-dreams-wall',
  templateUrl: './dreams-wall.component.html',
  styleUrls: ['./dreams-wall.component.css']
})
export class DreamsWallComponent implements OnInit {

  @Output() openEvent = new EventEmitter();
  @Input() listDreams: Dreams[] = [];
  list = new Array(56).fill(1);;
  changeText= false;
  ehMeuSonho = false;

  constructor( private util: UtilService) { }

  ngOnInit(): void {
  }

  ehRealizado = (sonho) => sonho.Status == "Realizado";

  ehPrivado = (sonho) => sonho.private;

  haveDescription(item: any){
    let haveDesc = item.description.length > 0;
    return haveDesc;
  }

  LimitarTexto = (sonho): string => this.util.LimitarTexto(sonho.descricaoSonho, 68);

  EmitterAdd(id = ""){
    const usuario = localStorage.getItem('usuarioBfd');

    if(usuario != null)
      this.openEvent.emit({tipo: 'RegistrarSonho'});
    else
      this.openEvent.emit({tipo: 'Login'});
  }

  atualizarListaSonhos = (lista: Dreams[]) => this.listDreams = lista;

  Editar(sonho: SonhoDto){
    let sonhoJson = JSON.stringify(sonho);

    let data = {
      tipo: 'editar',
      data:  sonhoJson
    }

    this.openEvent.emit(data);
  }

  Apagar(sonho: SonhoDto){
    let sonhoJson = JSON.stringify(sonho);

    let data = {
      tipo: 'apagar',
      data:  sonhoJson,
      id: sonho.Id
    }

    this.openEvent.emit(data);
  }

  exibirSonho(sonho){

    let data = {
      tipo: 'exibirSonho',
      data: JSON.stringify(sonho),
      id: sonho.Id
    }

    this.openEvent.emit(data);
  }
}
