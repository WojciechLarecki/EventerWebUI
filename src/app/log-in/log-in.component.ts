import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, FormsModule, LogoComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  userEmail!: string;
  userPassword!: string;

  loginUser(): void {
    alert(
      `UserEmail: ${this.userEmail} | UserPassword: ${this.userPassword}`
    );
  }
}
