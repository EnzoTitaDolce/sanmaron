import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PreparadosService {
  private jsonUrl = 'assets/preparados.json';
  constructor(private http: HttpClient) { }//crea el método constructor y el cliente http
  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl).pipe(map((response) => {
        return response; // Puedes desanidar aquí si es necesario
      }),
//      catchError(this.handleError)
    );
  }
}
