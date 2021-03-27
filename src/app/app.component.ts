import { DialogComponent } from './shared/dialog/dialog.component';
import { UtilService } from './services/util.service';
import { DreamsWallComponent } from './../dreams-wall/dreams-wall.component';
import { VisibilidadeSonhoDto } from './../models/visibilidadeDto';
import { SonhoDto } from './../models/sonhoDto';
import { sonhadorLocal } from './../models/sonhadorLocal';
import { SonhosService } from './../services/sonhos.service';
import { Component,ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dreams } from 'src/dreams-wall/dreams-wall.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { RegisterDreamComponent } from 'src/register-dream/register-dream.component';
import { SignInComponent } from 'src/sign-in/sign-in.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SonhadorService } from 'src/services/sonhador.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  listDreams: Dreams[] = [];
  title = 'before-i-die';
  usuario = this.util.PegarUsuarioLogado();

  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  @ViewChild(DreamsWallComponent) dreamWall: DreamsWallComponent;


  constructor(public dialog: MatDialog,
              private util: UtilService,
              private sonhadorService: SonhadorService,
              private sonhosService: SonhosService) {}

  ngOnInit(): void {
    this.ListarSonhosPublicos();
  }

  PopularDream(item){
    let visibilidade = new VisibilidadeSonhoDto();
    let dream: Dreams = {
      id: item.id,
      descricaoSonho: item.descricaoSonho,
      idSonhador: item.idSonhador,
      Status: item.status,
      private: visibilidade.ehPrivada(item.visibilidade),
      nomeSonhador: this.usuario == null ? "" : this.usuario.nome
    }

    return dream;
  }


  EventNavBar(val: any){
    switch (val.tipo) {

      case 'MeusSonhos':
        this.AtualizarSonhosPorSonhador();
        break;

      case 'Logoff':
        break;

      case 'Home':
        this.ListarSonhosPublicos();
        break;

      case 'Login':
        this.openLogin();
        break;
      case 'Alterar-Tema':
        this.AlterarTema(val.tema);
        break;
      default:
        break;
    }
  }

  UpdateNavBar = (user: string) => this.navbar.toggleLogged(user);

  openLogin(): void {
    const dialogRef = this.dialog.open( SignInComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        let nome = (<sonhadorLocal>result).nome
        this.UpdateNavBar(nome);
      }
    });
  }

  AlterarTema(tema){
    this.dreamWall.tema = tema;
  }
  AtualizarSonhosPorSonhador(){
    const usuario = this.sonhadorService.PegarUsuarioLogado();

    this.sonhosService.listarSonhosPorSonhador(usuario.id)
                      .subscribe(
                        result =>
                        {
                          this.popularListaSonho(result);
                          this.dreamWall.ehMeuSonho = true;
                        },
                        error => {
                          this.util.AlertSnack('Não foi possível abrir Meus Sonhos','Intermitência')
                          console.log('eh.. erro', error)
                        }
                      )
  }
  atualizarListaMeusSonhos(idSonhoDestaque){
    
    const usuario = this.sonhadorService.PegarUsuarioLogado();
    if(this.dreamWall.ehMeuSonho){

      this.sonhosService.listarSonhosPorSonhador(usuario.id)
                        .subscribe(
                          result =>
                          {
                            this.popularListaSonho(result);
                            this.dreamWall.idSonhoDestaque = idSonhoDestaque;
                            this.dreamWall.ehMeuSonho = true;
                          },
                          error => {
                            this.util.AlertSnack('Não foi possível abrir Meus Sonhos','Intermitência')
                            console.log('eh.. erro', error)
                          }
                        )
    }else{
      this.sonhosService.listarSonhosPublicos()
      .subscribe(
        result =>
        {
          this.popularListaSonho(result);
          this.dreamWall.idSonhoDestaque = idSonhoDestaque;
          this.dreamWall.ehMeuSonho = false;
        },
        error => {
          this.util.AlertSnack('Não foi possível abrir Meus Sonhos','Intermitência')
          console.log('eh.. erro', error)
        }
      )
    }
  }

  popularListaSonho(result){
    this.listDreams = [];
    for (let i = 0; i < result.length; i++) {
      let sonho: any = result[i];
      this.listDreams.push( this.PopularDream(sonho) );
    };

    this.dreamWall.atualizarListaSonhos(this.listDreams);
  }

  ListarSonhosPublicos(){
    this.sonhosService.listarSonhosPublicos()
                      .subscribe(
                        (res: any) =>
                        {
                          this.popularListaSonho(res);
                          this.dreamWall.ehMeuSonho = false;
                        }
                      );
  }

  abrirSonho(sonho) {
    if(sonho != null){

      sonho = JSON.parse(sonho);
      this.sonhadorService.pegarSonhador(sonho.idSonhador)
                          .subscribe(
                          res => {
                            if( res )
                            {
                              let dataModel = { nomeSonhador: res.nome,
                                                descricaoSonho: sonho.descricaoSonho }

                              this.dialog.open( DialogComponent, { data: JSON.stringify(dataModel) });
                            }
                          },
                          error => this.util.AlertSnack('Não foi possível abrir o sonho.','Erro...')
                          )
    }
  }


  openRegistrarSonho(sonho = null): void {
    const dialogRef = this.dialog.open(RegisterDreamComponent, {
      width: '500px',
      data: sonho
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result !== null && result.msg == "atualizarListaMeusSonhos"){       
        this.atualizarListaMeusSonhos(result.idSonhoDestaque);
      }
    });
  }

  apagarSonho(id: string){
    if(confirm('Tem certeza que deseja apagar esta mensagem?'))
    {
      this.sonhosService.apagar(id)
                        .subscribe( () =>
                        {
                          this.util.AlertSnack('Sonho esquecido...','DELETADO!');
                          this.AtualizarSonhosPorSonhador();
                        }
      );
    }
  }

  EventDreamWall(item: any){
    switch (item.tipo) {

      case 'MeusSonhos':
        this.AtualizarSonhosPorSonhador();
        break;

      case 'RegistrarSonho':
        this.openRegistrarSonho();
        break;

      case 'apagar':
        let sonho = JSON.parse(item.data);
        this.apagarSonho(sonho.id);
        break;

      case 'editar':
        this.openRegistrarSonho(item)
        break;

      case 'Login':
        this.openLogin();
        break;

      case 'exibirSonho':
        this.abrirSonho(item.data);
        break;

      default:
        break;
    }

  }

}
