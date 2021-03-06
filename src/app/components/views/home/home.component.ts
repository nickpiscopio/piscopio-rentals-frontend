import { Component, OnInit } from "@angular/core";
import { FooterService } from "src/app/services/footer.service";
import { HeaderService, HeaderState } from "src/app/services/header.service";
import { NavigationService, NavigationUrl } from "src/app/services/navigation.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private headerService: HeaderService,
    private footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.headerService.setState(HeaderState.HOME);
    this.footerService.setShowBookingAndPropertyManagerInfo(true);
  }

  navigateToAddress(): void {
    this.navigationService.navigateTo(NavigationUrl.PROPERTY);
  }

  bookNow(): void {
    this.navigationService.navigateTo(NavigationUrl.BOOK_NOW);
  }

  getVehicleThreshold(): number {
    return environment.vehicleThreshold;
  }
}
