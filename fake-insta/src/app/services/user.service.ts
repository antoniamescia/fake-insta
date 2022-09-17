import { catchError, Observable, of, tap } from 'rxjs';

import { User } from '../models/user';
import { InMemoryDataService } from './in-memory-data.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // GET user from mock DB
  getUser(username: string): Observable<User> {
    const url = `${this.userUrl}/${username}`;
    return this.http.get<User>(url).pipe(
      tap((_) => console.log(`fetched user with username=${username}`)),
      catchError(this.handleError<User>(`getUser username=${username}`))
    );
  }

  // GET users from mock DB
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap((_) => console.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // TODO: implement better logging mechanism
  log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
