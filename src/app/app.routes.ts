import { Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [{
    path: 'singup',
    title: 'Create Eventer\'s account',
    component: SingUpComponent
}, {
    path: 'Login',
    title: 'Log to Eventer\'s account',
    component: LogInComponent
}];
