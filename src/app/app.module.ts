import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/views/app.component';
import { RegistrationComponent } from './components/views/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericDialogComponent } from './components/views/dialogs/generic-dialog/generic-dialog.component';
import { SuccessComponent } from './components/views/registration/success/success.component';
import { HomeComponent } from './components/views/home/home.component';
import { HeaderComponent } from './components/fragments/header/header.component';
import { FooterComponent } from './components/fragments/footer/footer.component';
import { HeroComponent } from './components/fragments/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    GenericDialogComponent,
    SuccessComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ DatePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
