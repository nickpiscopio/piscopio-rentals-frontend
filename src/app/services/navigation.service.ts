import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export enum NavigationState {
    PROPERTY_ADDRESS_CLICKED,
    BOOK_NOW_CLICKED,
    REGISTRATON_SUCCESSFUL,
    HOA_FORM_URL_CLICKED
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
    directionsUrl = environment.directions;

    constructor(private router: Router) { }

    navigateToPage(state: NavigationState): void {
        switch (state) {
            case NavigationState.BOOK_NOW_CLICKED:
                window.open(environment.bookNow)
                return;
            case NavigationState.PROPERTY_ADDRESS_CLICKED:
                window.open(this.directionsUrl, "_blank");
                return;
            case NavigationState.REGISTRATON_SUCCESSFUL:
                this.router.navigateByUrl("/registration/success");
                return;
            case NavigationState.HOA_FORM_URL_CLICKED:
                this.router.navigateByUrl("/registration");
                return;

        }
    }
}
