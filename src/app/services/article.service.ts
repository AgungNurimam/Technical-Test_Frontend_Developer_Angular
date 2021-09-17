import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = 'http://api.mediastack.com/v1/news?access_key=4f553b581b2d3ea0320e09919f157085';

  constructor(private httpClient: HttpClient) { }



  getPosts(){
    return this.httpClient.get(this.url);
  }
}
