import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Item } from "../item.model";
@Component({
  selector: "list",
  templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
  items: Item[];
  dictionaries: {};
  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this._appService.items.subscribe(items => (this.items = items));
    this._appService.locations.subscribe(
      locations => (this.dictionaries = locations)
    );
  }

  getDestinationName(val) {
    return this.dictionaries[val].detailedName;
  }
}
