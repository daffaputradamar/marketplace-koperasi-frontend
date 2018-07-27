import { Component, OnInit } from "@angular/core"
import { Produk } from "../../models/produk"
import { ProdukService } from "../../services/produk.service"

import { Kategori } from "../../models/kategori"
import { KategoriService } from "../../services/kategori.service"

@Component({
  selector: "app-produk",
  templateUrl: "./produk.component.html",
  styleUrls: ["./produk.component.css"]
})
export class ProdukComponent implements OnInit {
  produks: Produk[]
  kategoris: Kategori[]

  constructor(
    private _produkService: ProdukService,
    private _kategoriService: KategoriService
  ) {}

  ngOnInit() {
    this.getProduk()
    this.getKategori()
  }

  getProduk() {
    this.produks = this._produkService.getProduk()
  }

  getKategori() {
    this.kategoris = this._kategoriService.getKategori()
  }
}
