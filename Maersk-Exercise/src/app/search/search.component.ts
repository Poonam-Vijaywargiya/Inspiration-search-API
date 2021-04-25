import { Component, Input } from "@angular/core";
import { AppService } from "../app.service";
import { Item } from "../item.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogDataComponent } from "../dialog-data/dialog-data.component";
@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  @Input() name: string;
  oAuthData: any;
  authExpireTime: any;
  flightData: any;
  origin: String = "";
  maxPrice: number = 0;
  items: Item[];
  error: any = "";
  dictionaries: {};
  currency: any;
  constructor(private _appService: AppService, public dialog: MatDialog) {}
  panelOpenState = false;
  ngOnInit(): void {
    this.getAuthToken();
    this._appService.items.subscribe(items => (this.items = items));
    this._appService.locations.subscribe(
      locations => (this.dictionaries = locations)
    );
  }

  getAuthToken() {
    this._appService.getAmadeusAuthToken().subscribe(
      data => {
        this.oAuthData = data;
        let d = new Date();
        d.setSeconds(d.getSeconds() + this.oAuthData.expires_in);
        this.authExpireTime = d.getTime();
      },
      err => console.log("Error while fetching Auth token", err)
    );
  }

  async searchFlights() {
    if (new Date().getTime() > this.authExpireTime) {
      await this.getAuthToken();
    }
    this.flightAPI();
  }

  flightAPI() {
    this._appService
      .searchFlighInspirationAPI(
        this.oAuthData.access_token,
        this.origin,
        this.maxPrice
      )
      .subscribe(
        data => {
          this.error = "";
          this.flightData = data;
          this.items = this.flightData.data;
          this.currency = this.flightData.dictionaries.currencies;
          this.dictionaries = this.flightData.dictionaries.locations;
          this._appService.changeItems(this.items);
          this._appService.changeLocations(this.dictionaries);
        },
        err => {
          this.error = err.statusText;
          this.items = [];
          this.dictionaries = "";
          this._appService.changeItems(this.items);
          this._appService.changeLocations(this.dictionaries);
        }
      );
  }
  openDialog() {
    this.dialog.open(DialogDataComponent, {
      data: this.dictionaries
    });
  }
}
