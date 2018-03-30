import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RouterModule  } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component'
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
