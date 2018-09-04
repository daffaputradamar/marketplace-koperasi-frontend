import { Component, OnInit } from "@angular/core";
import { Usaha } from "../../../models/usaha";
import { UsahaService } from "../../../services/usaha.service";

@Component({
  selector: "app-profilusaha",
  templateUrl: "./profilusaha.component.html",
  styleUrls: ["./profilusaha.component.css"]
})
export class ProfilusahaComponent implements OnInit {
  usaha: Usaha;
  constructor(private _usahaService: UsahaService) {}

  ngOnInit() {
    this.getUsahaById();
  }

  getUsahaById() {
    this.usaha = this._usahaService.getUsahaById(1);
  }
}
