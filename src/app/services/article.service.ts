import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = 'https://api-berita-indonesia.vercel.app/antara/tekno/';

  constructor(private httpClient: HttpClient) { }



  getPosts(){
    return this.httpClient.get(this.url);
  }
}
