import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  progressColor: ThemePalette = "accent";
  progressMode: ProgressSpinnerMode = "indeterminate";
  progressDiameter = 25;

  constructor(private loadingService: LoadingService) { }

  isLoading(): boolean {
    return this.loadingService.isLoading()
  }
}
