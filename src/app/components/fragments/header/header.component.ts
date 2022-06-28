import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
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

  constructor(private headerService: HeaderService) { }

  bookNow(): void {
    window.open(environment.bookNow)
  }

  shouldShowBookNowButton(): boolean {
    return this.headerService.shouldShowBookNowButton()
  }
}
