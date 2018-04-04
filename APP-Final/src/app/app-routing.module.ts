import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProtectedComponent } from './protected/protected.component';
import { AboutComponent } from './about/about.component';
import { LoginGuard } from './service/login.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoginGuard] },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
