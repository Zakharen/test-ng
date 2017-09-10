import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../shared/_models/index';
import { UserService } from './../../shared/_services/index';
import { AuthenticationService } from './../../auth/authentication.service';

@Component({
    moduleId: module.id,
    styleUrls: ['./profile.component.css'],
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

    currentUser: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        debugger;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() { }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.authenticationService.logout();
            this.router.navigate(['/login']);
        });
    }
}
