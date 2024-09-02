import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css'],
})
export class PostAPIComponent {
  apiURL: any = 'https://jsonplaceholder.typicode.com';
  postObj: any = {
    id: 0,
    userId: null,
    title: '',
    body: '',
  };
  myData: any[] = [];
  // http = Inject(HttpClient);
  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.postObj.userId === null || isNaN(this.postObj.userId)) {
      alert('User ID must be a valid number');
      return;
    }
    this.postObj.userId = Number(this.postObj.userId);

    this.http
      .post(`${this.apiURL}/posts`, this.postObj)
      .subscribe((res: any) => {
        if (!this.postObj.title || !this.postObj.body) {
          alert('Input fields cannot be empty');
          return;
        } else {
          alert('Successfully Created');
          console.log(res);
        }
        this.postObj.title = '';
        this.postObj.body = '';
        this.postObj.userId = '';
        this.getPostData();
      });
  }

  onUpdate() {
    this.http
      .put(`${this.apiURL}/posts/${this.postObj.id}`, this.postObj)
      .subscribe((res: any) => {
        if (!this.postObj.title || !this.postObj.body) {
          alert('Input fields cannot be empty');
          return;
        } else {
          alert('Details Successfully Updated');
          console.log(res);
        }
        this.postObj.title = '';
        this.postObj.body = '';
        this.postObj.userId = '';
        this.getPostData();
      });
  }
  onEdit(res: any) {
    this.postObj = res;
  }

  onDelete(id: number, title: string, body: string) {
    this.http.delete(`${this.apiURL}/posts/${id}`).subscribe((res: any) => {
      alert(
        `Details Deleted successfully with id - ${id}, \n title - ${title} and \n body - ${body}`
      );
      console.log(id);

      this.getPostData();
    });
  }
  getPostData() {
    this.http.get(`${this.apiURL}/posts`).subscribe((res: any) => {
      this.myData = res;
    });
  }

  // to show the post data
}
