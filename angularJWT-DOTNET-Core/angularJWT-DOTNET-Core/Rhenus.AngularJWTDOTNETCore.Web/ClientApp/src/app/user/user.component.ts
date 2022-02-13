import { Component, OnInit } from "@angular/core";

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  cars: Car[] = [];
  constructor() {}

  ngOnInit(): void {
    this.cars.push({ vin: "123", year: "2020", brand: "BMW", color: "Black" });
  }
}
