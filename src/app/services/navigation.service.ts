import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export enum NavigationUrl {
    PROPERTY,
    BOOK_NOW,
    REGISTRATION,
    REGISTRATON_SUCCESSFUL,
    HOME
}

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    directionsUrl = environment.directions;

    constructor(private router: Router) { }

    navigateTo(state: NavigationUrl): void {
        switch (state) {
            case NavigationUrl.BOOK_NOW:
                window.open(environment.bookNow)
                return;
            case NavigationUrl.PROPERTY:
                window.open(this.directionsUrl, "_blank");
                return;
            case NavigationUrl.REGISTRATON_SUCCESSFUL:
                this.router.navigateByUrl("/registration/success");
                return;
            case NavigationUrl.REGISTRATION:
                this.router.navigateByUrl("/registration");
                return;
            case NavigationUrl.HOME:
            default:
                this.router.navigateByUrl("");
                return;

        }
    }
}
