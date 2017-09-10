import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/index';

import { LoginComponent } from './auth/login/index';
import { RegisterComponent } from './auth/register/index';

import { HomeComponent } from './home/index';
import { MediaComponent } from './home/media/index';
import { ProfileComponent } from './home/profile/index';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'media'
            },
            { path: 'media', component: MediaComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
