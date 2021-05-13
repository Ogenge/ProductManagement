import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = "https://localhost:44376/api/ProductManage";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getProduct(id): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL + '/products/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateProduct(product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiURL + '/products', JSON.stringify(product), this.httpOptions)
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
