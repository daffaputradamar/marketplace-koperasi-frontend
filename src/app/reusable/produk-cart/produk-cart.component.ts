import { Component, OnInit } from "@angular/core";
import { Produk } from "../../models/produk";
import { ProdukService } from "../../services/produk.service";

@Component({
  selector: "app-produk-cart",
  templateUrl: "./produk-cart.component.html",
  styleUrls: ["./produk-cart.component.css"]
})
export class ProdukCartComponent implements OnInit {
  produks: Produk[];

  constructor(private _produkService: ProdukService) {}

  ngOnInit() {
    this.getProduk();
  }

  getProduk() {
    this.produks = this._produkService.getProduk();
  }
}
