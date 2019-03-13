import {HttpClient} from '@angular/common/http';
import {AuthDto} from '../dto/auth.dto';
import {Observable, throwError} from 'rxjs';
import {TokenDto} from '../dto/token.dto';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

const BASE_URL = 'https://contacts-telran.herokuapp.com';

@Injectable()
export class ApiProvider {
  constructor(private client: HttpClient) {
  }

  registration(email: string, password: string): Observable<string> {
    let body = JSON.stringify(new AuthDto(email, password));
    console.log(body);
    return this.client.post<TokenDto>(
      BASE_URL + '/api/registration',
      new AuthDto(email,password)
    ).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err.error.message);
      }),
      map((value: TokenDto) => value.token)
    );
  }
}
