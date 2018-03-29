import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { HomeComponent } from './home/home.compoment';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'welcome', component: WelcomeComponent , pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
