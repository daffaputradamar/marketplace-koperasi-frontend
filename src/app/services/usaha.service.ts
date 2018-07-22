import { Injectable } from "@angular/core";
import { Usaha } from "../models/usaha";
import { USAHA_ITEMS } from "../api/usaha-items";

@Injectable({
  providedIn: "root"
})
export class UsahaService {
  usahaItems: Usaha[] = USAHA_ITEMS;

  constructor() {}

  getUsahaById(id: number) {
    return this.usahaItems[id - 1];
  }
}
