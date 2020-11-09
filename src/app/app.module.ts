import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { MyDialogComponent } from './shared/helper/my-dialog/my-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeResolver } from './home/home.resolver';
import { LoadingComponent } from './shared/helper/loading/loading.component';
import { ToastrModule } from 'ngx-toastr';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import { MyDeleteDialogComponent } from './shared/helper/my-delete-dialog/my-delete-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './home/add/add.component';
import { UpdateComponent } from './home/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    MyDialogComponent,
    LoadingComponent,
   
    MyDeleteDialogComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar:true,
      progressAnimation:'increasing',
      closeButton:true,
      enableHtml:true,
      timeOut:5000
}),
  ],
  providers: [HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
