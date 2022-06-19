import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './views/registration/registration.component';
import { SuccessComponent } from './views/registration/success/success.component';

const routes: Routes = [
  // TODO: This will be removed when we have a home page.
  { path: '', redirectTo:'registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
