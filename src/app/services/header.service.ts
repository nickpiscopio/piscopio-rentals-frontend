import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
    private showBookNowButton = false;
  
    setShowBookNow(showBookNow: boolean) {
        this.showBookNowButton = showBookNow;
    }

    shouldShowBookNowButton(): boolean {
        return this.showBookNowButton;
    }
}