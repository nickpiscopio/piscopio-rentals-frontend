import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistrationForm } from 'src/app/constants/registration-form.constant';
import { Registration } from 'src/app/interfaces/registration.interface';
import { RegistrationService } from 'src/app/services/communication/registration/registration.service';
import { DateService } from 'src/app/services/util/date/date.service';
import { environment } from 'src/environments/environment';
import { GenericDialogComponent } from '../dialogs/generic-dialog/generic-dialog.component';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ],
  providers: [
    DateService,
    RegistrationService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class RegistrationComponent {
  private registration: Registration | undefined
  private currentVehicleTotal = 1
  private vehicleThreshold: number = 4
  plateLoopNumbers: number[] | undefined;

  todaysDate = new Date();

  registrationForm = this.getRegistrationFormGroup();

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private dateService: DateService,
    private registrationService: RegistrationService,
    private loadingService: LoadingService
  ) { 
    this.setVehicleArray()
  }

  addAnotherVehicle(): void {
    if (this.currentVehicleTotal < this.vehicleThreshold) {
      this.currentVehicleTotal++

      this.setVehicleArray()

      return
    }

    this.openVehicleLimitExceededDialog()
  }

  register(): void {
    if (!this.registrationForm.valid) {
      this.openFormErrorDialog()

      return;
    }

    this.setLoading(true);

    this.augmentRegistration()

    if (this.registration == undefined) {
      this.openFormErrorDialog()

      this.setLoading(false);

      return;
    }

    this.registrationService.register(this.registration).subscribe({
      // Documentation: https://rxjs.dev/deprecations/subscribe-arguments
      next: v => {
        this.openSuccessPage();

        this.setLoading(false);
      },
      error: error => {
        this.openErrorDialog()

        console.error("Error submitting registration form: ", error);

        this.setLoading(false)
      }
    })
  }

  private setLoading(isLoading: boolean) {
    this.loadingService.setLoading(isLoading);

    if (this.loadingService.isLoading()) {
      this.registrationForm.disable();

      return;
    }

    this.registrationForm.enable();
  }

  private getRegistrationFormGroup() {
    const formGroup: any = {}
    formGroup[RegistrationForm.durationDateFrom] = new FormControl<Date | null>(null, Validators.required);
    formGroup[RegistrationForm.durationDateTo] = new FormControl<Date | null>(null, Validators.required);
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
      durationDateFrom: this.dateService.formatDate(this.registrationForm.controls[RegistrationForm.durationDateFrom].value),
      durationDateTo: this.dateService.formatDate(this.registrationForm.controls[RegistrationForm.durationDateTo].value),
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
    this.plateLoopNumbers = Array(this.currentVehicleTotal).fill(0).map((x,i)=>i)
  }

  private openSuccessPage(): void {
    this.route.navigate(['/registration/success']);
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
      'An Error Occurred',
      `There was an error when submitting the registration form. Please try again later or contact:\n\n${environment.propertyManager.name}\n${environment.propertyManager.phoneNumber}\n${environment.propertyManager.email}`,
      );
  }

  private openDialog(title: string, content: string, positiveButton?:string, negativeButton?: string): void {
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

