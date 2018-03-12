import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Observable }               from 'rxjs/Observable';
import { MoviesService }            from './movies.service';
import { Movie }                    from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;
  language: string;
  sort: number;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  }

  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }
}
