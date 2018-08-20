import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
<<<<<<< HEAD
import { Observable} from 'rxjs/Observable';
=======
import { Observable } from 'rxjs';
>>>>>>> 2731023c1beb7ee89ef4e18f03e7a74db4c463a6

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authHeader = req.clone({ headers: req.headers.set('Authorization', `${sessionStorage.getItem('token')}`)});
        return next.handle(authHeader);
    }
}
