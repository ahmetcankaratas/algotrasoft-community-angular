import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

describe('AuthService', () => {
  let service: AuthService,
    httpTestingController: HttpTestingController,
    router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  it('should sign up a user', () => {
    const mockSignupResponse = {
      kind: 'identitytoolkit#SignupNewUserResponse',
      idToken: 'testIdToken',
      email: 'test@email.com',
      refreshToken: 'testRefreshToken',
      expiresIn: '3600',
      localId: 'testLocalId',
    };

    service.signup('test@email.com', 'testPassword').subscribe((response) => {
      expect(response).toEqual(mockSignupResponse);
    });

    const mockReq = httpTestingController.expectOne(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`
    );

    expect(mockReq.request.method).toEqual('POST');
    expect(mockReq.request.body).toEqual({
      email: 'test@email.com',
      password: 'testPassword',
      returnSecureToken: true,
    });

    mockReq.flush(mockSignupResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});