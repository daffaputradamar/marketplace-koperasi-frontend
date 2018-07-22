import { Injectable } from "@angular/core";
import { Kategori } from "../models/kategori";
import { KATEGORI_ITEMS } from "../api/kategori-items";

@Injectable({
  providedIn: "root"
})
export class KategoriService {
  katItems: Kategori[] = KATEGORI_ITEMS;

  constructor() {}

  getKategori() {
    return this.katItems;
  }
}
