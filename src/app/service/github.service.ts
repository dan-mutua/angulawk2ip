import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,throwError} from 'rxjs'
import { environment } from 'src/environments/environment';
import{catchError, retry} from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpClient: HttpClient) {}

  public Profile(username: string): Observable<any> {
    let profileUrl =
      environment.gitHubApi + username+ '?access_token=' + environment.access_token;
    return this.httpClient
      .get<any>(profileUrl)
      .pipe(retry(1), catchError(this.handleError));
  }
  public Repos(username: string): Observable<any> {
    let profileUrl =
      environment.gitHubApi +username+ '/repos?access_token=' + environment.access_token;
    return this.httpClient
      .get<any>(profileUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse){
    let errMsg:string;
    if (error.error instanceof ErrorEvent){
      errMsg=`MESSAGE:${error.error.message}`;
    }else{
      errMsg=`STATUS: ${error.status} MESSAGE:${error.message}`
    }
    return throwError(errMsg);
  }
}
