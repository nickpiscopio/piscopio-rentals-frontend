import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Registration } from 'src/app/interfaces/registration.interface';
import { RegistrationService } from 'src/app/services/registration.service';
import { environment } from 'src/environments/environment';
import { GenericDialogComponent } from '../dialogs/generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent {
  private registration: Registration | undefined
  private totalVehicles = 1
  private vehicleThreshold = 8
  plateLoopNumbers: number[] | undefined

  form = new FormGroup({
    "durationDateFrom": new FormControl("", Validators.required),
    "durationDateTo": new FormControl("", Validators.required),
    "namePrinted": new FormControl("", Validators.required),
    "addressCity": new FormControl("", Validators.required),
    "addressStreet": new FormControl("", Validators.required),
    "addressState": new FormControl("", Validators.required),
    "addressZipcode": new FormControl("", Validators.required),
    "phoneNumber": new FormControl("", Validators.required),
    "phoneNumber2": new FormControl(""),
    "vehicle1PlateState": new FormControl(""),
    "vehicle1PlateNumber": new FormControl(""),
    "vehicle1Rental": new FormControl(""),
    "vehicle2PlateState": new FormControl(""),
    "vehicle2PlateNumber": new FormControl(""),
    "vehicle2Rental": new FormControl(""),
    "vehicle3PlateState": new FormControl(""),
    "vehicle3PlateNumber": new FormControl(""),
    "vehicle3Rental": new FormControl(""),
    "vehicle4PlateState": new FormControl(""),
    "vehicle4PlateNumber": new FormControl(""),
    "vehicle4Rental": new FormControl(""),
    "vehicle5PlateState": new FormControl(""),
    "vehicle5PlateNumber": new FormControl(""),
    "vehicle5Rental": new FormControl(""),
    "vehicle6PlateState": new FormControl(""),
    "vehicle6PlateNumber": new FormControl(""),
    "vehicle6Rental": new FormControl(""),
    "vehicle7PlateState": new FormControl(""),
    "vehicle7PlateNumber": new FormControl(""),
    "vehicle7Rental": new FormControl(""),
    "vehicle8PlateState": new FormControl(""),
    "vehicle8PlateNumber": new FormControl(""),
    "vehicle8Rental": new FormControl(""),
});

  constructor(
    public dialog: MatDialog,
    private registrationService: RegistrationService
  ) { 
    this.setVehicleArray()
  }

  addAnotherVehicle(): void {
    if (this.totalVehicles < this.vehicleThreshold) {
      this.totalVehicles++

      this.setVehicleArray()

      return
    }

    this.openVehicleLimitExceededDialog()
  }

  register(): void {
    // const registration: Registration = {
    //   durationDateFrom: "1/11/22",
    //   durationDateTo: "2/5/22",
    //   namePrinted: "John A. Ally",
    //   addressStreet: "123 Address Lane Drive",
    //   addressCity: "Bensalem",
    //   addressState: "PA",
    //   addressZipcode: "19020",
    //   phoneNumber: "2155555555",
    //   phoneNumber2: "2675555555",
    //   vehicle1PlateState: "PA",
    //   vehicle1PlateNumber: "123",
    //   vehicle2PlateState: "NJ",
    //   vehicle2PlateNumber: "456",
    //   vehicle3PlateState: "NC",
    //   vehicle3PlateNumber: "789",
    //   vehicle4PlateState: "CA",
    //   vehicle4PlateNumber: "357",
    //   vehicle5PlateState: "TT",
    //   vehicle5PlateNumber: "1234",
    //   vehicle6PlateState: "RF",
    //   vehicle6PlateNumber: "8920",
    //   vehicle7PlateState: "PE",
    //   vehicle7PlateNumber: "123456",
    //   vehicle8PlateState: "NA",
    //   vehicle8PlateNumber: "g46356"
    // }
    if (this.registration == undefined) {
      this.openFormErrorDialog()

      return;
    }

    this.registrationService.register(this.registration).subscribe({
      // Documentation: https://rxjs.dev/deprecations/subscribe-arguments
      next: v => {
        this.openPositiveDialog();
      },
      error: error => {
        this.openErrorDialog()

        console.error("Error submitting registration form: ", error);
      },
      complete: () => { }
    })
  }

  private setVehicleArray(): void {
    this.plateLoopNumbers = Array(this.totalVehicles).fill(0).map((x,i)=>i)
  }

  private openPositiveDialog(): void {
    this.openDialog(
      'Success!',
      `You are on your way! We'll let you know if you need to complete anything else. If you have any questions, please contact:\n\n${environment.propertyManager.name}\n${environment.propertyManager.phoneNumber}\n${environment.propertyManager.email}`,
      );
  }

  private openVehicleLimitExceededDialog(): void {
    this.openDialog(
      'Vehicle Limit Met',
      `You cannot have more than ${this.vehicleThreshold} vehicles at the property.`,
      );
  }

  private openFormErrorDialog(): void {
    this.openDialog(
      'Invalid Form Submission',
      'Please fill out the required forms before continuing.',
      );
  }

  private openErrorDialog(): void {
    this.openDialog(
      'An error occurred',
      `There was an error when submitting the registrion form. Please try again later or contact:\n\n${environment.propertyManager.name}\n${environment.propertyManager.phoneNumber}\n${environment.propertyManager.email}`,
      );
  }

  private openDialog(title: string, content: string, positiveButton?: string, negativeButton?: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: title,
        content: content,
        positiveButton: positiveButton,
        negativeButton: negativeButton
    };

    this.dialog.open(GenericDialogComponent, dialogConfig);
  }
}

