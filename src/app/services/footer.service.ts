import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
    private showBookingAndPropertyManagerInfo = false;
  
    setShowBookingAndPropertyManagerInfo(showBookingAndPropertyManagerInfo: boolean) {
        this.showBookingAndPropertyManagerInfo = showBookingAndPropertyManagerInfo;
    }

    shouldShowBookingAndPropertyManagerInfo(): boolean {
        return this.showBookingAndPropertyManagerInfo;
    }
}