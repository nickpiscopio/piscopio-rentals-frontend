import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressColor: ThemePalette = "accent";
  progressMode: ProgressSpinnerMode = "indeterminate";
  progressDiameter = 25;

  private isPopState = false;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private locStrat: LocationStrategy) { }

  ngOnInit(): void {
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack.
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset.
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }

  isLoading(): boolean {
    return this.loadingService.isLoading()
  }
}
