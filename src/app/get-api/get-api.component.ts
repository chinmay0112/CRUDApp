import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../myAPI/apiservice.service';
@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userlist: any[] = [];
  // constructor(private http: HttpClient) {}
  constructor(private getApi: ApiserviceService) {}
  // getAllUser() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       this.userlist = res;
  //     });
  // }
  // by services
  getAllUser() {
    this.getApi.getData().subscribe((res: any) => {
      this.userlist = res;
    });
  }
}
