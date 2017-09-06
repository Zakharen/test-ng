import { AuthenticationService } from './../shared/_services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
