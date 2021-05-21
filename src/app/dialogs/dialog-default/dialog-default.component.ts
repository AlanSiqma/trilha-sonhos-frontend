import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SolicitarAlteraracaoSenhaDto } from 'src/app/models/SolicitarAlteraracaoSenhaDto';
import { ValidarTokenDto } from 'src/app/models/ValidarTokenDto';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { SonhadorService } from 'src/app/services/sonhador.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dialog-default',
  templateUrl: './dialog-default.component.html',
  styleUrls: ['./dialog-default.component.css']
})
export class DialogDefaultComponent implements OnInit {
  solicitarAlteraracaoSenha: SolicitarAlteraracaoSenhaDto;

  constructor(public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private sonhadorService: SonhadorService,
    private util: UtilService) {
    let token: ValidarTokenDto = {
      Token: this.actRoute.snapshot.params.tokenId
    }
    this.sonhadorService.validarToken(token)
      .subscribe(
        (result) => {
          if (result.Email = ! "") {
            this.solicitarAlteraracaoSenha = {
              Email: result.email,
              ConfirmationPassword: "",
              Password: ""
            }
            this.openDialog();
          } else {
            this.util.AlertSnack("token invalido", 'Erro');
            window.location.href = './';
          }
        },
        (error) => {
          this.util.AlertSnack("Erro ao tentar validar o token", 'Erro');
          window.location.href = './';
        });
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: '500px',
      data: { solicitarAlteraracaoSenhaDto: this.solicitarAlteraracaoSenha }
    });
  }
}
