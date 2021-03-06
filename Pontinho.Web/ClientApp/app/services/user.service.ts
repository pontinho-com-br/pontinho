import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ValidationService } from './validation.service';
import { AuthService } from './auth.service';
import { md5 } from './md5';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private BaseEndPoint: string = '/api/user';

    constructor(
        private _http: Http,
        private validationService: ValidationService,
        private authService: AuthService
    ) { }

    currentUser: any;

    login(user: any): Observable<any> {
        return this._http.post(`${this.BaseEndPoint}/login`, user)
            .catch(e => this.validationService.handleError(e));
    }

    logoff(): Observable<any> {
        return this._http.post(`${this.BaseEndPoint}/logoff`, null)
            .catch(e => this.validationService.handleError(e));
    }

    register(user: any): Observable<any> {
        console.log(user);
        return this._http.post(`${this.BaseEndPoint}/register`, user)
            .catch(e => this.validationService.handleError(e));
    }

    profile(): Observable<any> {
        return this._http.get(`${this.BaseEndPoint}/profile`)
            .map((response: Response) => response.json())
            .catch(e => this.validationService.handleError(e));
    }

    updateProfile(profile: any): Observable<any> {
        return this._http.post(`${this.BaseEndPoint}/profile`, profile)
            .map((response: Response) => response.json())
            .catch(e => this.validationService.handleError(e));
    }

    getGravatarImage(): string {
        return this.getGravatarByEmail(this.currentUser.email);
    }

    getGravatarByEmail(email: string): string {
        if (!email) email = "___";
        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=210&d=mm';
    }
}