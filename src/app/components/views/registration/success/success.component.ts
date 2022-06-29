import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { HeaderService, HeaderState } from 'src/app/services/header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  propertyManagerName = environment.propertyManager.name;
  propertyManagerPhoneNumber = environment.propertyManager.phoneNumber;
  propertyManagerEmail = environment.propertyManager.email;

  constructor(private headerService: HeaderService, private footerService: FooterService) { }

  ngOnInit(): void {
    this.headerService.setState(HeaderState.REGISTRATON_SUCCESS);
    this.footerService.setShowBookingAndPropertyManagerInfo(false);
  }
}
