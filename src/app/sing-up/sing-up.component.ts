import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [RouterLink, LogoComponent, FormsModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  userPassword!: string;
  userRepeatedPassword!: string;
  userEmail!: string;
  signupUser(): void {
    alert(`UserEmail: ${this.userEmail} | 
      UserPassword: ${this.userPassword} | 
      UserRepeatedPassword: ${this.userRepeatedPassword}`);
  }
}
