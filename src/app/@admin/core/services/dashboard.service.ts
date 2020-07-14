import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { DASHBOARD_STATS } from '@graphql/operations/query/dashboard';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getStats() {
    return this.get(
      DASHBOARD_STATS
    ).pipe(map((result: any) => {
      return {
        users: result.users,
        platforms: result.platforms,
        tags: result.tags,
        genres: result.genres,
        shopProducts: result.shopProducts,
        games: result.games
      };
    }));
  }
}
