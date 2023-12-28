import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import {ArticleService} from "./article.service";

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolverService implements Resolve<any> {

  constructor(
    private articleService : ArticleService
  ) { }
  resolve(route: ActivatedRouteSnapshot, stateRoute: RouterStateSnapshot) {
    return this.articleService.getAllArticlesFromDB();
  }

}
