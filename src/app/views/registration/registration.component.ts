import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent {

  constructor(private registrationService: RegistrationService) { }

  register(): void {
    this.registrationService.register({
      durationDateFrom: "1/11/22",
      durationDateTo: "2/5/22",
      namePrinted: "John A. Ally",
      addressStreet: "123 Address Lane Drive",
      addressCity: "Bensalem",
      addressState: "PA",
      addressZipcode: "19020",
      phoneNumber: "2155555555",
      phoneNumber2: "2675555555",
      vehicle1PlateState: "PA",
      vehicle1PlateNumber: "123",
      vehicle2PlateState: "NJ",
      vehicle2PlateNumber: "456",
      vehicle3PlateState: "NC",
      vehicle3PlateNumber: "789",
      vehicle4PlateState: "CA",
      vehicle4PlateNumber: "357",
      vehicle5PlateState: "TT",
      vehicle5PlateNumber: "1234",
      vehicle6PlateState: "RF",
      vehicle6PlateNumber: "8920",
      vehicle7PlateState: "PE",
      vehicle7PlateNumber: "123456",
      vehicle8PlateState: "NA",
      vehicle8PlateNumber: "g46356"
    }).subscribe(response => {
      console.log("response: ", response);
    })
  }
}
