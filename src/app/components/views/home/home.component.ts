import { Component, OnInit } from "@angular/core";
import { FooterService } from "src/app/services/footer.service";
import { HeaderService, HeaderState } from "src/app/services/header.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService, private footerService: FooterService) { }

  ngOnInit(): void {
    this.headerService.setState(HeaderState.HOME);
    this.footerService.setShowBookingAndPropertyManagerInfo(true);
  }

  bookNow(): void {
    window.open(environment.bookNow)
  }

  getVehicleThreshold(): number {
    return environment.vehicleThreshold;
  }
}
