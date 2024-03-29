import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategryMenuComponent } from './components/product-categry-menu/product-categry-menu.component';
import { SearchComponent } from './component/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
{path: 'search/:keyword', component: ProductListComponent},
{path: 'products/:id', component: ProductDetailsComponent},
{path: 'category/:id', component: ProductListComponent},
{path: 'category', component: ProductListComponent},
{path: 'products', component: ProductListComponent},
{path: '', redirectTo:'/products', pathMatch:'full'},
{path: '**', redirectTo:'/products', pathMatch:'full'},



];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
