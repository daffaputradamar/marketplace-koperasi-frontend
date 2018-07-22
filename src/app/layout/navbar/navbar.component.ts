import { Component, OnInit } from "@angular/core";
import { KategoriService } from "../../services/kategori.service";
import { Kategori } from "../../models/kategori";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  kategoris: Kategori[];

  constructor(private _kategoriService: KategoriService) {}

  ngOnInit() {
    this.getKat();
  }

  getKat() {
    this.kategoris = this._kategoriService.getKategori();
  }
}
