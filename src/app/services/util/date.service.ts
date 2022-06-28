import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(private datePipe: DatePipe) { }
  
  formatDate(date: Date): string {
    const formattedDate = this.datePipe.transform(date, "MM/dd/YYYY");
      return formattedDate !== null ? formattedDate : String(date);
   }
}
