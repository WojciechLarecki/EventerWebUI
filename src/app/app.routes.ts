import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'Create Eventer\'s account',
        component: SingUpComponent
    },
    {
        path: 'login',
        title: 'Log to Eventer\'s account',
        component: LogInComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
