import { Component, OnInit } from "@angular/core";
import { Usaha } from "../../../models/usaha";
import { UsahaService } from "../../../services/usaha.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  usaha: Usaha;
  constructor(private _usahaService: UsahaService) {}

  ngOnInit() {
    this.getUsahaById();
  }

  getUsahaById() {
    this.usaha = this._usahaService.getUsahaById(1);
  }
}
