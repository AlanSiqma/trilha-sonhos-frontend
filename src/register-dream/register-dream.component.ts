import { VisibilidadeSonhoService } from './../services/visibilidade-sonho.service';
import { StatusService } from './../services/status.service';
import { UtilService } from './../app/services/util.service';
import { sonhadorLocal } from './../models/sonhadorLocal';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { SonhosService } from 'src/services/sonhos.service';
import { SonhoDto } from 'src/models/sonhoDto';

export interface DialogData {
  tipo: string;
  usuarioId: string;
  visibilidade: string;
  descricaoSonho: string;
}

@Component({
  selector: 'app-register-dream',
  templateUrl: './register-dream.component.html',
  styleUrls: ['./register-dream.component.css']
})
export class RegisterDreamComponent implements OnInit {

  visibilidade = '';
  formUser: FormGroup;

  status = { Realizado: null, Em_Progresso: null };
  tipoVisbibilidade = { Publica: null, Privada: null };

  usuario: sonhadorLocal = JSON.parse(localStorage.getItem('usuarioBfd'));

  constructor(
        private sonhosService: SonhosService,
        private statusService: StatusService,
        private visibilidadeService: VisibilidadeSonhoService,
        public dialogRef: MatDialogRef<AppComponent>,
        private util: UtilService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData)
        {
          this.Startup(data);
        };

  Startup(data){
    this.PopularTipoStatus();
    this.PopularTipoVisibilidade();
    this.GerarForm();
    if(data) this.PopularForm(data);
  }

  PopularForm(model){
    let sonho = JSON.parse(model.data);
    this.formUser.patchValue(
      {
        id: sonho.id,
        descricaoSonho: sonho.descricaoSonho,
        usuarioId: sonho.idSonhador,
        visibilidade: sonho.private,
        isPrivate: sonho.private,
        status: sonho.idStatus == this.status.Realizado
      });
    }

  ngOnInit(): void {
    this.ViewChangeForm();
  }

  GerarForm(){
    this.formUser = new FormGroup({
      id: new FormControl(),
      usuarioId: new FormControl(),
      descricaoSonho: new FormControl(),
      visibilidade: new FormControl(),
      isPrivate: new FormControl(false),
      status: new FormControl()
    });
  }

  PopularTipoStatus(){
    this.statusService.listar()
                      .subscribe(
                        (res: any[]) =>
                        {
                          this.status.Realizado = res.find( x => x.status == "Realizado").id;
                          this.status.Em_Progresso = res.find( x => x.status == "Em Progresso").id;
                        },
                        error => this.util.AlertSnack('Não foi possível carregar status.','Erro')
                      )
  }

  PopularTipoVisibilidade(){
    this.visibilidadeService.listar()
                            .subscribe(
                              (res: any[]) =>
                              {
                                this.tipoVisbibilidade.Privada = res.find( x => x.visibilidade == "Privada").id;
                                this.tipoVisbibilidade.Publica = res.find( x => x.visibilidade == "Publica").id;
                              },
                              error => this.util.AlertSnack('Não foi possível carregar status.','Erro')
                            )
  }

  SignIn(){
    const user = this.formUser.get('email').value;
    this.dialogRef.close(user);
  }

  Close = (msg = null) => this.dialogRef.close(msg);

  ViewChangeForm(){
    this.formUser.valueChanges.subscribe(() =>
      {
        let ehPrivado: Boolean = this.formUser.get('isPrivate').value;

        if(ehPrivado)
          this.visibilidade = this.tipoVisbibilidade.Privada;
        else
          this.visibilidade = this.tipoVisbibilidade.Publica;
      }
    );
  }


  getSonho(): SonhoDto {

    let sonho: SonhoDto = {
      Id: this.formUser.get('id').value,
      DescricaoSonho: this.formUser.get('descricaoSonho').value,
      IdSonhador: this.usuario.id,
      IdVisibilidade: this.visibilidade,
      IdStatus: this.getIdStatus(),
      Sonho: ''
    };

    return sonho;
  }

  getIdStatus(){
    return this.formUser.get('status').value == true ? this.status.Realizado : this.status.Em_Progresso;
  }

  RegitrarSonho(){
    if(this.data != null && this.data.tipo =='editar'){
      this.EditarSonho();
    }
    else{
      this.sonhosService.registrarSonho(this.getSonho())
                        .subscribe(
                          response =>
                          {
                              if(response != null){
                                this.util.AlertSnack("Sonho registrado!","CADASTRADO!");
                                this.Close('atualizarListaMeusSonhos');
                              }
                          },
                          error =>
                          {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");
                              console.log('erro ', error);
                              this.Close();
                          }
                         );
    }

  }

  EditarSonho(){
    this.sonhosService.alterar(this.getSonho())
                      .subscribe(
                        response =>
                        {
                            if(response != null){
                              this.util.AlertSnack("Sonho registrado!","CADASTRADO!");
                              this.Close('atualizarListaMeusSonhos');
                            }
                        },
                        error =>
                        {
                            this.util.AlertSnack("Não foi possível efetuar o registro...", "Erro!");
                            console.log('erro ', error);
                            this.Close();
                        }
                       );
  }
}
