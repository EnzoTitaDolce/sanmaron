import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerfumeriaService {

  private jsonUrl = 'assets/perfumeria.json';
  constructor(private http: HttpClient) { }//crea el método constructor y el cliente http
  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl).pipe(map((response) => {
        return response; // Puedes desanidar aquí si es necesario
      }),
//      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {//crea el método para manejar el error
    let errorMessage = 'Unknown error!';//crea el mensaje de error
    if (error.error instanceof ErrorEvent) {//verifica si el atributo error del objeto error de la clase
                                            //HttpErrorResponse es una instancia de ErrorEvent
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

