import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from './../../shared/_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    register() {
        debugger;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    debugger;
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
