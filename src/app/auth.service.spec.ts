import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

fdescribe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;
  let fakeRouter;

  beforeEach(() => {
    //fakeRouter = { navigate : () => {}};
    fakeRouter=jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [
        AuthService,
      { provide: Router, useValue: fakeRouter}]
    });

    service = TestBed.get(AuthService);
    controller = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
describe('.logout()', () => {
  
  beforeEach(() => {
    service.logout();
  });
  it('should navigate to [\'/\']', () => {
    expect(fakeRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});

  describe('.logine()', () => {
   
    beforeEach(() => {
    });

    it('calls post with the correct url', () => {
      const email = 'email@test.com';
      const password ='passw0rd';

      service.logine(email, password).subscribe();

      const req = controller.expectOne('http://localhost:3000/employer/signin');
      req.flush({ });
      controller.verify();
    });
  })
});
