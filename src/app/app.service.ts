import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Item } from "./item.model";
@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  private itemsList = new BehaviorSubject([]);
  items = this.itemsList.asObservable();
  private locationsObj = new BehaviorSubject({});
  locations = this.locationsObj.asObservable();

  getAmadeusAuthToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    let dataString =
      "grant_type=client_credentials&client_id=XT9PaeeyZH9YTnqJykZpNeSjUt6snXAf&client_secret=L4sS8cXBCF3twriK";
    return this.http.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      dataString,
      httpOptions
    );
  }

  searchFlighInspirationAPI(token, origin, maxPrice) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get(
      `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}&maxPrice=${maxPrice}`,
      httpOptions
    );
  }

  changeItems(items: Item[]) {
    this.itemsList.next(items);
  }

  changeLocations(items: {}) {
    this.locationsObj.next(items);
  }
  ngOnInit() {}
}
