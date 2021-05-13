import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Productattributes } from "./productattributes";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private apiURL = "https://localhost:44376/api/ProductManage";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getProductAttribute(): Observable<Productattributes[]> {
    return this.httpClient.get<Productattributes[]>(this.apiURL + '/productAttributes')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getProductAttributes(id): Observable<Productattributes[]> {
    return this.httpClient.get<Productattributes[]>(this.apiURL + '/productAttributes/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createProductAttributes(product): Observable<Productattributes> {
    return this.httpClient.post<Productattributes>(this.apiURL + '/productAttributes/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
