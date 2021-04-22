import { DreamsWallComponent } from './pages/dreams-wall/dreams-wall.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SignInComponent } from 'src/app/dialogs/sign-in/sign-in.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select';
import { DialogRegisterDreamComponent } from 'src/app/dialogs/register-dream/dialog-register-dream.component';
import { InitialPageComponent } from './dialogs/initial-page/initial-page.component';
import { MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DialogComponent} from './shared/dialog/dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {DemoMaterialModule} from '../app/material-module';
import {MatNativeDateModule} from '@angular/material/core';
import { AutenticateComponent } from './pages/autenticate/autenticate.component';
import {RegisterDreamComponent} from './pages/register-dream/register-dream.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DialogRegisterDreamComponent,
    SignInComponent,    
    DreamsWallComponent,
    RegisterDreamComponent,
    DialogComponent,
    InitialPageComponent,
    AutenticateComponent
  ],
  imports: [
    PickerModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
