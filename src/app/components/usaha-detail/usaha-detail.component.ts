import { Component, OnInit } from "@angular/core";
import { Usaha } from "../../models/usaha";
import { UsahaService } from "../../services/usaha.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-usaha-detail",
  templateUrl: "./usaha-detail.component.html",
  styleUrls: ["./usaha-detail.component.css"]
})
export class UsahaDetailComponent implements OnInit {
  usaha: Usaha;
  usahaId: number;
  constructor(
    private _usahaService: UsahaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.usahaId = id;
    this.getUsahaById();
  }

  getUsahaById() {
    this.usaha = this._usahaService.getUsahaById(this.usahaId);
  }
}
