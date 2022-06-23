import { Component } from '@angular/core';
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

  bookNow(): void {
    window.open(environment.bookNow)
  }
}
