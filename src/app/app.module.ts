import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { SearchMoviesComponent } from './search/search-movies.component';

import { MoviesService } from './movies/movies.service';
import { SearchService } from './search/search.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:id', component: DetailsComponent },
  { path: 'search/:query', component: SearchMoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchComponent,
    DetailsComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
