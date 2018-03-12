import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private movieSearchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=68b4fe2a513155a58dd0af4adacb281b&language=en-US&query=batman&page=1&include_adult=false';

  constructor (private http: Http) {
  }

  searchMovies(query: string, page: number) {
    let movieSearchUrl = `${this.movieSearchUrl}?&query=${query}&page=${page}`;
    
    return this.http.get(movieSearchUrl)
      .map((res) => { return res.json() })
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }
}
