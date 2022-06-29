import { Injectable } from '@angular/core';

export enum HeaderState {
    HOME,
    REGISTRATION,
    REGISTRATON_SUCCESS
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
    private state: HeaderState = HeaderState.HOME;
  
    setState(state: HeaderState) {
        this.state = state;
    }

    shouldShowContact(): boolean {
        switch (this.state) {
            case HeaderState.REGISTRATON_SUCCESS:
                return false;
            case HeaderState.HOME:
            case HeaderState.REGISTRATION:
            default:
                return true;
            
        }
    }

    shouldShowBookNowButton(): boolean {
        switch (this.state) {
            case HeaderState.REGISTRATION:
            case HeaderState.REGISTRATON_SUCCESS:
                return false;
            case HeaderState.HOME:
            default:
                return true;
            
        }
    }
}