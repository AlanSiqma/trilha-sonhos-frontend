import { UtilService } from '../../services/util.service';
import { SonhoDto } from 'src/app/models/sonhoDto';
import { Component,Renderer2 , EventEmitter, Input, OnInit, Output ,ElementRef,ViewChild } from '@angular/core';
import { Trilha } from 'src/app/models/Trilhadto';

export class Dreams {
  id: string;
  descricaoSonho: string;
  private: boolean;
  // status: string;
  Status: string;
  nomeSonhador = '';
  idSonhador: string;
  trilha:Trilha[];
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
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;


  list = new Array(56).fill(1);;
  changeText= false;
  ehMeuSonho = false;
  idSonhoDestaque;
  tema= 'fundo-cinza-2.jpg';
  renderer:Renderer2

    constructor( private util: UtilService) { 
     
    }

  ngOnInit(): void {
     
     if(!this.IsLoggin){
          this.openEvent.emit({tipo: 'openLoginDialog'});
       } 
  }

  ehMeuSonhoMetodh(sonho):boolean{
    
    let usuario =  this.util.PegarUsuarioLogado();
    
    if(usuario != null && usuario.id == sonho.idSonhador)
      return true;
    
    return this.ehMeuSonho;
  }

  IsLoggin = this.util.IsLoggin();

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

  ehDestaque(idSonhado){
    if(idSonhado == this.idSonhoDestaque){
      return true;
    }
    return false;
  }

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
  alterarTema(){
    console.log('alterar tema');
  }
  selecionarTamanhoFundo(){
    if(this.listDreams.length < 16){
      return "cover";
     
    }
    return  "contain";
  }
  ScrollRight(){    
    setTimeout(()=>{
        window.location.href='#descricao-sonho-destaque';
    }, 1000);
  }
}
