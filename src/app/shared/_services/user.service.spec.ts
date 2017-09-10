import { fakeBackendProvider } from './../_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpXhrBackend } from '@angular/common/http';
import { UserService } from './user.service';
import { Http, Response, HttpModule, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

describe('UserService', () => {

    let subject: UserService;
    let backend: MockBackend;

    const profileInfo = {
        id: 1,
        username: 'user1',
        password: 'password1',
        joined: '2017-09-08',
        firstName: 'User1',
        lastName: 'User1'
    };

    const users = {
        data: [
            {
                id: 1,
                username: 'user1',
                password: 'password1',
                joined: '2017-09-08',
                firstName: 'User1',
                lastName: 'User1'
            },
            {
                id: 2,
                username: 'user2',
                password: 'password2',
                joined: '2017-09-08',
                firstName: 'User2',
                lastName: 'User2'

            },
            {
                id: 3,
                username: 'user3',
                password: 'password3',
                joined: '2017-09-08',
                firstName: 'User3',
                lastName: 'User3'
            }
        ]
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                UserService,
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

    beforeEach(inject([UserService, MockBackend], (service, mockBackend) => {
        subject = service;
        backend = mockBackend;
    }));

    it('US. should get profile data of user', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            const options = new ResponseOptions({ body: profileInfo });

            connection.mockRespond(new Response(options));
        });

        subject.getById(1).subscribe((response) => {
          expect(response).toEqual(profileInfo);
          done();
        });
    });

    it('US. should get all users', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            const options = new ResponseOptions({ body: JSON.stringify(users) });

            connection.mockRespond(new Response(options));
        });

        subject.getAll().subscribe((response) => {
            const _resp = response.data;
            expect(_resp.length).toBe(3);
            expect(_resp[0].id).toEqual(1);
            expect(_resp[1].id).toEqual(2);
            expect(_resp[2].id).toEqual(3);
            done();
        });
    });

});
