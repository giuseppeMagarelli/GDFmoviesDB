import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private movieSearchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=68b4fe2a513155a58dd0af4adacb281b&language=en-US&query=batman&page=1&include_adult=false';

  constructor (private http: Http) {
    
  }

  getMovies(): Observable<Movie[]> {
    let movieSearchUrl = `${this.movieSearchUrl}popular?`;

    return this.http.get(movieSearchUrl).map(this.extractData);
  }

  searchMovies(query: string) {
    let movieSearchUrl = `${this.movieSearchUrl}?query=${query}`;

    return this.http.get(this.movieSearchUrl).map((res) => { return res.json() })
  }

  getDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}`;

    return this.http.get(detailsUrl).map((res) => { return res.json() })
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }
}
