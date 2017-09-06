import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/index';

import { LoginComponent } from './auth/login/index';
import { RegisterComponent } from './auth/register/index';

import { HomeComponent } from './home/index';
import { MediaComponent } from './home/media/index';
import { UserComponent } from './home/user/index';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'media', component: MediaComponent },
            { path: 'user', component: UserComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
