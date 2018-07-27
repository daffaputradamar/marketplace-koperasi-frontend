import { Injectable } from '@angular/core';
import { Komentar } from "../models/komentar";
import { KOMENTAR_ITEMS } from "../api/komentar-items";

@Injectable({
  providedIn: 'root'
})
export class KomentarService {
  komenItems: Komentar[] = KOMENTAR_ITEMS;

  constructor() { }

  getkomentar(){
    return this.komenItems;
  }
}
