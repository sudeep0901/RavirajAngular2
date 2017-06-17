import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {

    //reuturn observable

    //method 1
    // return this.http.get('http://localhost:8000/api/customer');
    // method2
    return this.http.get('http://localhost:8000/api/customer')
      .map((resonse: Response) => resonse.json());
  }

}
