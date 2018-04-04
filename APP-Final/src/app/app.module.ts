import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProtectedComponent } from './protected/protected.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginGuard } from './service/login.guard'
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthService,
    LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
