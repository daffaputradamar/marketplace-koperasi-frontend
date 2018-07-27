import { Component, OnInit } from "@angular/core";
import { ProdukService } from "../../services/produk.service";
import { Produk } from "../../models/produk";

@Component({
  selector: "app-keranjang",
  templateUrl: "./keranjang.component.html",
  styleUrls: ["./keranjang.component.css"]
})
export class KeranjangComponent implements OnInit {
  produks: Produk[];

  constructor(private _produckService: ProdukService) {}

  ngOnInit() {
    this.getProduk();
  }

  getProduk() {
    this.produks = this._produckService.getProduk();
  }
}
