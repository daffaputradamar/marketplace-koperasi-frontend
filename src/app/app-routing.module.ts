import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./components/index/index.component";
import { ProdukComponent } from "./components/produk/produk.component";
import { ProdukDetailComponent } from "./components/produk-detail/produk-detail.component";
import { UsahaDetailComponent } from "./components/usaha-detail/usaha-detail.component";
import { KeranjangComponent } from "./components/keranjang/keranjang.component";
import { UsahaBuatComponent } from "./components/usaha-buat/usaha-buat.component";
import { LoginComponent } from "./components/login/login.component";
import { MyprofileComponent } from "./components/myprofile/myprofile.component";
import { KonfirmasiPembayaranComponent } from "./components/konfirmasi-pembayaran/konfirmasi-pembayaran.component";
import { PembelianComponent } from "./components/pembelian/pembelian.component"
import { MyusahaComponent } from "./components/myusaha/myusaha.component";
import { DaftarUserComponent } from "./components/daftar-user/daftar-user.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "produk/:id",
    component: ProdukDetailComponent
  },
  {
    path: "usaha/:id",
    component: UsahaDetailComponent
  },
  {
    path: "produk",
    component: ProdukComponent
  },
  {
    path: "keranjang",
    component: KeranjangComponent
  },
  {
    path: "buatUsaha",
    component: UsahaBuatComponent
  },
  {
    path: "myprofile",
    component: MyprofileComponent
  },
  {
    path: "konfirmasi",
    component: KonfirmasiPembayaranComponent
  },
  {
    path: "pembelian",
    component: PembelianComponent
  },
  {
    path: 'myusaha',
    component: MyusahaComponent
  },
  {
    path: 'daftar',
    component: DaftarUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
