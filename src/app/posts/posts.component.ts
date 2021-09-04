import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Articles } from '../interfaces/articles';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayArticles: boolean;

  articles$: Observable<Articles>;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articles$ = this.postService.getArticles();
    this.route.paramMap     //TODO: snapshot 差別
    .pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      shareReplay(1) //TODO: 待補 chach
    )
  }

}
