import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../auth/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }

    logout(event: any) {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
