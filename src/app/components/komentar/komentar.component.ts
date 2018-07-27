import { Component, OnInit } from '@angular/core';
import { Komentar } from "../../models/komentar";
import { KomentarService } from "../../services/komentar.service";

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})
export class KomentarComponent implements OnInit {
  komens: Komentar[];
  constructor(
    private _komenService: KomentarService
  ) {}

  ngOnInit() {
    this.getKomen()
  }

  getKomen(){
    this.komens = this._komenService.getkomentar();
  }

}
