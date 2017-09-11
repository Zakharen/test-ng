import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../shared/_models/index';
import { UserService } from './../../shared/_services/index';
import { AuthenticationService } from './../../auth/services/authentication.service';
import { MediaHttpService } from './../media/services/media-http.service';

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
        private router: Router,
        private mediaService: MediaHttpService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser.mediaFilesNumber = this.mediaService.get().length || 0;
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
