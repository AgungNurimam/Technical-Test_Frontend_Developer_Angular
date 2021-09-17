import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=56c0f27708ca40d2bae0878c1a94abd1';

  constructor(private httpClient: HttpClient) { }



  getPosts(){
    return this.httpClient.get(this.url);
  }
}
