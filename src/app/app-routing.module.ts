import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./components/index/index.component"
import { ProdukComponent } from "./components/produk/produk.component"
import { ProdukDetailComponent } from "./components/produk-detail/produk-detail.component"
import { UsahaDetailComponent } from "./components/usaha-detail/usaha-detail.component"

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
  },
  {
    path: "produk",
    component: ProdukComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
