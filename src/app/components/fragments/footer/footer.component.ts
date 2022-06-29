import { Component } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { NavigationService, NavigationState } from 'src/app/services/navigation.service';
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
    this.navigationService.navigateToPage(NavigationState.HOA_FORM_URL_CLICKED);
  }

  getDirections(): void {
    this.navigationService.navigateToPage(NavigationState.PROPERTY_ADDRESS_CLICKED);
  }

  shouldShowBookingAndPropertyManagerInfo(): boolean {
    return this.footerService.shouldShowBookingAndPropertyManagerInfo()
  }
}
