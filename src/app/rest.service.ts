import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // apiUrl:any = "assets/rest.json";
  apiUrlBase = 'http://127.0.0.1:8000/';
  // apiUrlBase = 'http://127.0.0.1:8000/api/marcas?page=3';
  apiUrl =  this.apiUrlBase+'api/marcas';

  constructor(private http:HttpClient) { }

  getDataRestApi(data,method="post"){    
    switch (method) {
      case "post":
        return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl, data)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              console.log(err);
              reject(err);
            });
        });
      break;
      case "get": 
        console.log(data,method);
        return new Promise((resolve, reject) => {
          this.http.get(this.apiUrl, data)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              console.log(err);
              reject(err);
            });
        });
      break;
    }
    
  }

}
