import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from 'src/app/interfaces/dialog.interface';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent {
  title: string = ""
  content: string = ""
  positiveButton: string = ""
  negativeButton: string = ""
  
  constructor(
    @Inject(MAT_DIALOG_DATA) data: Dialog
  ) {
    this.title = data.title
    this.content = data.content,
    this.positiveButton = data.positiveButton ? data.positiveButton : 'OK',
    this.negativeButton = data.negativeButton
   }

   shouldShowNegativeButton(): boolean {
    return this.negativeButton !== undefined && this.negativeButton !== '';
   }
}
