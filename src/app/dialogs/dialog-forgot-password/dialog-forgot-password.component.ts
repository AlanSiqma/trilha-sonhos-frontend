import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-dialog-forgot-password',
  templateUrl: './dialog-forgot-password.component.html',
  styleUrls: ['./dialog-forgot-password.component.css']
})
export class DialogForgotPasswordComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppComponent>) { }

  ngOnInit(): void {
  }
  RegisterEvent(item: any) {
    this.dialogRef.close(item);
  }
}
