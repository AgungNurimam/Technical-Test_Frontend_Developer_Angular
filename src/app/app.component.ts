import { ArticleService } from './services/article.service';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getPosts().subscribe((response: any) => {
      console.log('XXX Response', response);
      // this.articles = response.articles;
      this.articles = response.data.posts;
      console.log('XXX Articles', this.articles);
    });
  }
}
