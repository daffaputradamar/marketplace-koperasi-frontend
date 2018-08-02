import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './layout/navbar/navbar.component'
import { IndexComponent } from './components/index/index.component'
import { ProdukDetailComponent } from './components/produk-detail/produk-detail.component'
import { UsahaDetailComponent } from './components/usaha-detail/usaha-detail.component'
import { ProdukComponent } from './components/produk/produk.component'
import { KomentarComponent } from './components/komentar/komentar.component'
import { KeranjangComponent } from './components/keranjang/keranjang.component'
import { UsahaBuatComponent } from './components/usaha-buat/usaha-buat.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProdukDetailComponent,
    UsahaDetailComponent,
    ProdukComponent,
    KomentarComponent,
    KeranjangComponent,
    UsahaBuatComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
