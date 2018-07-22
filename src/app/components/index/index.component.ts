import { Component, OnInit } from "@angular/core";
import { Produk } from "../../models/produk";
import { ProdukService } from "../../services/produk.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  produks: Produk[];

  constructor(private _produkService: ProdukService) {}

  ngOnInit() {
    this.getProduk();
  }

  getProduk() {
    this.produks = this._produkService.getProduk();
  }
}
