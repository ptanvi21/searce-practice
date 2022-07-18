import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _url:string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
      .catch(this.errorHandler)

    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error")
    }
    // return[
    //   {"id":1, "name": "John", "age":30},
    //   {"id":2, "name": "Andrew", "age":21},
    //   {"id":3, "name": "Rita", "age":40},
    //   {"id":4, "name": "Rosy", "age":45},
    // ]
  }

}
