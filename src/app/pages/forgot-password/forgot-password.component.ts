import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlteracaoSenhaDto } from 'src/app/models/alteracaoSenhaDto';
import { SonhadorService } from 'src/app/services/sonhador.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() registerEvent = new EventEmitter();
  formRecUser: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private sonhadorService: SonhadorService,
    private util: UtilService) {
    this.formRecUser = fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    )
  }
  ngOnInit(): void {
  }

  RecuperarSenha() {
    if (this.formRecUser.valid) {
      let dto: AlteracaoSenhaDto = {
        Email: this.formRecUser.get('email').value,
      }
      this.sonhadorService.solicitarAlteracaoSenhaSonhador(dto).subscribe((sucess) => { console.log(sucess) }, (error) => { console.log(error) });
      this.registerEvent.emit({});
      this.util.AlertSnack('Reset solicitado, enviaremos um e-mail para sua caixa', 'Aguarde!');
    }
  }

}
