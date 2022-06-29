import { Component } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { NavigationService, NavigationUrl } from 'src/app/services/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  propertyManager = environment.propertyManager.name;
  propertyManagerPhoneNumber = environment.propertyManager.phoneNumber;
  propertyManagerEmail = environment.propertyManager.email;

  constructor(
    private footerService: FooterService,
    private navigationService: NavigationService
  ) { }

  navigateToRentalForm(): void {
    this.navigationService.navigateTo(NavigationUrl.REGISTRATION);
  }

  getDirections(): void {
    this.navigationService.navigateTo(NavigationUrl.PROPERTY);
  }

  shouldShowBookingAndPropertyManagerInfo(): boolean {
    return this.footerService.shouldShowBookingAndPropertyManagerInfo()
  }
}
