import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistrationForm } from 'src/app/constants/registration-form.constant';
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
  private vehicleThreshold: number = 8
  plateLoopNumbers: number[] | undefined

  registrationForm = this.getRegistrationFormGroup();

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

    this.augmentRegistration()

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

  private getRegistrationFormGroup() {
    const formGroup: any = {}
    formGroup[RegistrationForm.durationDateFrom] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.durationDateTo] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.namePrinted] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.addressCity] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.addressStreet] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.addressState] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.addressZipcode] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.phoneNumber] = new FormControl("", Validators.required);
    formGroup[RegistrationForm.phoneNumber2] = new FormControl("");
    formGroup[RegistrationForm.vehicle1PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle1PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle1Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle2PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle2PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle2Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle3PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle3PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle3Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle4PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle4PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle4Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle5PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle5PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle5Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle6PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle6PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle6Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle7PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle7PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle7Rental] = new FormControl("");
    formGroup[RegistrationForm.vehicle8PlateState] = new FormControl("");
    formGroup[RegistrationForm.vehicle8PlateNumber] = new FormControl("");
    formGroup[RegistrationForm.vehicle8Rental] = new FormControl("");
    return new FormGroup(formGroup);
  }

  private augmentRegistration(): void {
    this.registration = {
      durationDateFrom: this.registrationForm.controls[RegistrationForm.durationDateFrom].value,
      durationDateTo: this.registrationForm.controls[RegistrationForm.durationDateTo].value,
      namePrinted: this.registrationForm.controls[RegistrationForm.namePrinted].value,
      addressCity: this.registrationForm.controls[RegistrationForm.addressCity].value,
      addressStreet: this.registrationForm.controls[RegistrationForm.addressStreet].value,
      addressState: this.registrationForm.controls[RegistrationForm.addressState].value,
      addressZipcode: this.registrationForm.controls[RegistrationForm.addressZipcode].value,
      phoneNumber: this.registrationForm.controls[RegistrationForm.phoneNumber].value,
      phoneNumber2: this.registrationForm.controls[RegistrationForm.phoneNumber2].value,
      vehicle1PlateState: this.registrationForm.controls[RegistrationForm.vehicle1PlateState].value,
      vehicle1PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle1PlateNumber, RegistrationForm.vehicle1Rental),
      vehicle2PlateState: this.registrationForm.controls[RegistrationForm.vehicle2PlateState].value,
      vehicle2PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle2PlateNumber, RegistrationForm.vehicle2Rental),
      vehicle3PlateState: this.registrationForm.controls[RegistrationForm.vehicle3PlateState].value,
      vehicle3PlateNumber:this.getVehiclePlateNumber(RegistrationForm.vehicle3PlateNumber, RegistrationForm.vehicle3Rental),
      vehicle4PlateState: this.registrationForm.controls[RegistrationForm.vehicle4PlateState].value,
      vehicle4PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle4PlateNumber, RegistrationForm.vehicle4Rental),
      vehicle5PlateState: this.registrationForm.controls[RegistrationForm.vehicle5PlateState].value,
      vehicle5PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle5PlateNumber, RegistrationForm.vehicle5Rental),
      vehicle6PlateState: this.registrationForm.controls[RegistrationForm.vehicle6PlateState].value,
      vehicle6PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle6PlateNumber, RegistrationForm.vehicle6Rental),
      vehicle7PlateState: this.registrationForm.controls[RegistrationForm.vehicle7PlateState].value,
      vehicle7PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle7PlateNumber, RegistrationForm.vehicle7Rental),
      vehicle8PlateState: this.registrationForm.controls[RegistrationForm.vehicle8PlateState].value,
      vehicle8PlateNumber: this.getVehiclePlateNumber(RegistrationForm.vehicle8PlateNumber, RegistrationForm.vehicle8Rental)
    }
  }

  private getVehiclePlateNumber(plateVariable: string, rentalVariable: string): string {
    const isARental = this.registrationForm.controls[rentalVariable].value
    let plateNumber = this.registrationForm.controls[plateVariable].value
    if (isARental) {
      plateNumber += " Rental";
    }
    return plateNumber
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

  private openDialog(title: this.registrationForm.controls[RegistrationForm.].value,, content: this.registrationForm.controls[RegistrationForm.].value,, positiveButton?: this.registrationForm.controls[RegistrationForm.].value,, negativeButton?: this.registrationForm.controls[RegistrationForm.].value,): void {
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

