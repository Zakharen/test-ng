import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpXhrBackend } from '@angular/common/http';
import { Http, HttpModule, Response, ResponseOptions, BaseRequestOptions, RequestMethod } from '@angular/http';
import { inject, TestBed } from '@angular/core/testing';

import { fakeBackendProvider } from './../shared/_helpers/index';

import { AuthenticationService } from './authentication.service';

import { User } from './../shared/_models/index';

describe('AuthenticationService', () => {

    let subject: AuthenticationService;
    let backend: MockBackend;

    const user = {
        username: 'user',
        password: 'secret'
    };

    const userToRegister = {
        username: 'user1',
        password: 'password1',
        firstName: 'User1',
        lastName: 'User1'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                AuthenticationService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (mockBackend, defaultOptions) => {
                      return new Http(mockBackend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

    beforeEach(inject([AuthenticationService, MockBackend], (service, mockBackend) => {
        subject = service;
        backend = mockBackend;
    }));

    it('should be allowed for registered user', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {

            expect(connection.request.method).toEqual(RequestMethod.Post);
            expect(connection.request.getBody()).toEqual(JSON.stringify(user));

            const options = new ResponseOptions({
              body: user
            });

            connection.mockRespond(new Response(options));

        });

        subject
            .login('user', 'secret').subscribe((response: any) => {
                expect(response).toEqual(user);
                done();
        });
    });

});
