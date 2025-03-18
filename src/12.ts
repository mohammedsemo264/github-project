import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-github-project',
  templateUrl: './github-project.component.html',
  styleUrls: ['./github-project.component.css']
})
export class GithubProjectComponent {
  username = '';
  repository = '';
  contributions = [];
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://api.github.com/repos/' + this.username + '/' + this.repository + '/contributors').subscribe((data: any[]) => {
      this.contributions = data;
    });
  }
}