import { Component, OnInit } from "@angular/core";
import { Produk } from "../../models/produk";
import { ProdukService } from "../../services/produk.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-produk-detail",
  templateUrl: "./produk-detail.component.html",
  styleUrls: ["./produk-detail.component.css"]
})
export class ProdukDetailComponent implements OnInit {
  produk: Produk;
  produkId: number;
  constructor(
    private _produkService: ProdukService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.produkId = id;
    this.getProdukById();
  }

  getProdukById() {
    this.produk = this._produkService.getProdukById(this.produkId);
  }
}
