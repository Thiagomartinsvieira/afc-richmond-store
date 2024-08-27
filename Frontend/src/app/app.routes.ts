import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { SaleComponent } from './pages/sale/sale.component';
import { AcessoriesComponent } from './pages/acessories/acessories.component';
import { JerseysComponent } from './pages/jerseys/jerseys.component';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sale', component: SaleComponent},
  {path: 'accessories', component: AcessoriesComponent},
  {path: 'jerseys', component: JerseysComponent},
  {path: 'new-arrivals', component: NewArrivalsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {}

