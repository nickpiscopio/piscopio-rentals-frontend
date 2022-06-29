import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { NavigationService, NavigationState } from 'src/app/services/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  propertyManager = environment.propertyManager.name;
  propertyManagerPhoneNumber = environment.propertyManager.phoneNumber;
  propertyManagerEmail = environment.propertyManager.email;

  constructor(
    private navigationService: NavigationService,
    private headerService: HeaderService
  ) { }

  bookNow(): void {
    this.navigationService.navigateToPage(NavigationState.BOOK_NOW_CLICKED);
  }

  shouldShowContact(): boolean {
    return this.headerService.shouldShowContact();
  }

  shouldShowBookNowButton(): boolean {
    return this.headerService.shouldShowBookNowButton();
  }
}
