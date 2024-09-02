import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
