import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AppComponent>) {   
  }
 
  ngOnInit(): void {
  }
  
  EventAuthEvent(item: any){
    this.dialogRef.close(item.obj);
  }
}
