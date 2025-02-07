import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-log-in',
    imports: [RouterLink, FormsModule, LogoComponent],
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  userEmail!: string;
  userPassword!: string;
  private readonly router = inject(Router);

  loginUser(): void {
    let isValidUser = false;
    let userRole = 'student';

    if (isValidUser) {
      
    }
    this.router.navigate(['/student']);
    
    // alert(
    //   `UserEmail: ${this.userEmail} | UserPassword: ${this.userPassword}`
    // );
  }
}
