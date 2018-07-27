import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./components/index/index.component";
import { ProdukDetailComponent } from "./components/produk-detail/produk-detail.component";
import { UsahaDetailComponent } from "./components/usaha-detail/usaha-detail.component";
import { KomentarComponent } from "./components/komentar/komentar.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
