import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/app/services/footer.service';
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

  constructor(private router: Router, private footerService: FooterService) { }

  navigateToRentalForm(): void {
    this.router.navigateByUrl('/registration');
  }

  shouldShowBookingAndPropertyManagerInfo(): boolean {
    return this.footerService.shouldShowBookingAndPropertyManagerInfo()
  }
}
