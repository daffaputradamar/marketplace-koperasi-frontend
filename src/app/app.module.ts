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
import { LoginComponent } from './components/login/login.component'
import { ProdukCartComponent } from './reusable/produk-cart/produk-cart.component'
import { KomentarFormComponent } from './reusable/komentar-form/komentar-form.component'
import { IndexHeaderComponent } from './components/index-header/index-header.component'
import { MyprofileComponent } from './components/myprofile/myprofile.component'
import { ProfileComponent } from './components/myusaha/profile/profile.component'
import { ProfilusahaComponent } from './components/myusaha/profilusaha/profilusaha.component'
import { ProdukusahaComponent } from './components/myusaha/produkusaha/produkusaha.component'
import { PenjualanusahaComponent } from './components/myusaha/penjualanusaha/penjualanusaha.component'
import { UlasanusahaComponent } from './components/myusaha/ulasanusaha/ulasanusaha.component'
import { KonfirmasiPembayaranComponent } from './components/konfirmasi-pembayaran/konfirmasi-pembayaran.component'
import { PembelianComponent } from './components/pembelian/pembelian.component'
import { MyusahaComponent } from './components/myusaha/myusaha.component'
import { SaldoComponent } from './components/saldo/saldo.component'
import { DaftarUserComponent } from './components/daftar-user/daftar-user.component';
import { LupaPasswordComponent } from './components/lupa-password/lupa-password.component';
import { RekeningComponent } from './components/myusaha/rekening/rekening.component'

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
    UsahaBuatComponent,
    LoginComponent,
    ProdukCartComponent,
    KomentarFormComponent,
    IndexHeaderComponent,
    MyprofileComponent,
    ProfileComponent,
    ProfilusahaComponent,
    ProdukusahaComponent,
    PenjualanusahaComponent,
    UlasanusahaComponent,
    KonfirmasiPembayaranComponent,
    PembelianComponent,
    MyusahaComponent,
    SaldoComponent,
    DaftarUserComponent,
    LupaPasswordComponent,
    RekeningComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
