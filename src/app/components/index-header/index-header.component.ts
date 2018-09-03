import { Component, OnInit } from "@angular/core";
import { Kategori } from "../../models/kategori";
import { KategoriService } from "../../services/kategori.service";

@Component({
  selector: "app-index-header",
  templateUrl: "./index-header.component.html",
  styleUrls: ["./index-header.component.css"]
})
export class IndexHeaderComponent implements OnInit {
  kategoris: Kategori[];

  constructor(private _kategoriService: KategoriService) {}

  ngOnInit() {
    this.getKategori();
  }

  getKategori() {
    this.kategoris = this._kategoriService.getKategori();
  }
}
