import { Injectable } from "@angular/core";
import { PRODUK_ITEMS } from "../api/produk-items";
import { Produk } from "../models/produk";

@Injectable({
  providedIn: "root"
})
export class ProdukService {
  produkItems: Produk[] = PRODUK_ITEMS;

  constructor() {}

  getProduk() {
    return this.produkItems;
  }
}
