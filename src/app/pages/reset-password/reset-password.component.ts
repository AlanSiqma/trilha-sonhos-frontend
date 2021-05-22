import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SonhadorService } from 'src/app/services/sonhador.service';
import { UtilService } from 'src/app/services/util.service';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SolicitarAlteraracaoSenhaDto } from 'src/app/models/SolicitarAlteraracaoSenhaDto';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @Output() registerEvent = new EventEmitter();
  formResetPassword: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sonhadorService: SonhadorService,
    private util: UtilService) {

    this.formResetPassword = fb.group(
      {
        email: [{ value: this.data.solicitarAlteraracaoSenhaDto.Email, disabled: true }, [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmationPassword: ['', [Validators.required]]
      },
      {
        validator: ConfirmedValidator('password', 'confirmationPassword')
      }
    )
  }

  ngOnInit(): void {
  }
  AlterarSenha() {
    if (this.formResetPassword.valid) {
      let dto: SolicitarAlteraracaoSenhaDto = {
        Email: this.data.solicitarAlteraracaoSenhaDto.Email,
        Password: this.formResetPassword.get('password').value,
        ConfirmationPassword: this.formResetPassword.get('confirmationPassword').value,
        Token: this.data.solicitarAlteraracaoSenhaDto.Token
      }
      this.sonhadorService.alteracaoSenhaSonhador(dto)
        .subscribe(
          (sucess) => {
            console.log(sucess);
            this.util.AlertSnack('Reset realizado', 'Tente se logar!');
            this.Redirecionamento();

          },
          (error) => {
            this.util.AlertSnack('Erro ao alterar a senha', 'Tente mais tarde!');
            this.Redirecionamento();
          });
    }
  }
  Redirecionamento() {
    setTimeout(() => {
      window.location.href = './';
    }, 1000);
  }
}
