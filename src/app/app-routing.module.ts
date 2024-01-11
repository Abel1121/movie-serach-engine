import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './core/features/movie/movie-details/movie-details.component';
import { movieDetailsResolver } from './core/features/movie/movie-details/movie-details.resolver';
import { movieListResolver } from './core/features/movie/movie-list/movie-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      movieList: movieListResolver,
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'movie/:imdbId',
    component: MovieDetailsComponent,
    resolve: {
      movieDetails: movieDetailsResolver,
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
