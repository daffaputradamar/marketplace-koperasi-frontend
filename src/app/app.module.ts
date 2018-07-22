import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { IndexComponent } from "./components/index/index.component";
import { ProdukDetailComponent } from "./components/produk-detail/produk-detail.component";
import { UsahaDetailComponent } from './components/usaha-detail/usaha-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProdukDetailComponent,
    UsahaDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
