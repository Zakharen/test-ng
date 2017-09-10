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

    let responseForm = '<form />';

    const regUser = {
        data: [
            {
                username: 'user',
                password: 'secret'
            }
        ]
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

    it('AuthS. should be called with proper arguments', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            console.log('>>> ', JSON.parse(connection.request.getBody()));
            expect(connection.request.method).toEqual(RequestMethod.Post);
            expect(connection.request.getBody()).toEqual(JSON.stringify(
                {
                    username: 'user',
                    password: 'secret'
                }
            ));
            // expect(connection.request.detectContentType()).toEqual(ResponseContentType.Json);

            const options = new ResponseOptions({
              body: responseForm
            });

            connection.mockRespond(new Response(options));

        });

        subject
            .login('user', 'secret').subscribe((response: any) => {
                expect(response._body).toEqual(responseForm);
                done();
        });
    });

});
