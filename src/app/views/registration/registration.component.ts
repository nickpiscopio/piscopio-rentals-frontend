import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  constructor(
    public dialog: MatDialog,
    private registrationService: RegistrationService
  ) { }

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
    }).subscribe({
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

  private openPositiveDialog() {
    this.openDialog(
      'Success!',
      `You are on your way! We'll let you know if you need to complete anything else. If you have any questions, please contact:\n\n${environment.propertyManager.name}\n${environment.propertyManager.phoneNumber}\n${environment.propertyManager.email}`,
      );
  }

  private openErrorDialog() {
    this.openDialog(
      'An error occurred',
      `There was an error when submitting the registrion form. Please try again later or contact:\n\n${environment.propertyManager.name}\n${environment.propertyManager.phoneNumber}\n${environment.propertyManager.email}`,
      );
  }

  private openDialog(title: string, content: string, positiveButton?: string, negativeButton?: string) {
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
