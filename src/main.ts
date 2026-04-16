import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from './app/pages/login/login';
import { RegisterComponent } from './app/pages/register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ]
}).catch(err => console.error(err));