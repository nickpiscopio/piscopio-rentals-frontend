import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RegistrationComponent } from './components/views/registration/registration.component';
import { SuccessComponent } from './components/views/registration/success/success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', children: [
    { path: '', component: RegistrationComponent },
    { path: 'success', component: SuccessComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
