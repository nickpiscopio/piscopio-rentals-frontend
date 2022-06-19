import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  propertyManagerName = environment.propertyManager.name;
  propertyManagerPhoneNumber = environment.propertyManager.phoneNumber;
  propertyManagerEmail = environment.propertyManager.email;
}
