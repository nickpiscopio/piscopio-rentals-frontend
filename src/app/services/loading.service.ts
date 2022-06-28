import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
    private loading = false;
  
    setLoading(isLoading: boolean) {
        this.loading = isLoading;
    }

    isLoading(): boolean {
        return this.loading;
    }
}