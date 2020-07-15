import { Injectable } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { DASHBOARD_STATS_ELEMENTS } from '@graphql/operations/query/dashboard';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  getStats() {
    return this.get(
      DASHBOARD_STATS_ELEMENTS
    ).pipe(map((result: any) => {
      return {
        users: result.users,
        platforms: result.platforms,
        genres: result.genres,
        tags: result.tags,
        shopProducts: result.shopProducts,
        games: result.products
      };
    }));
  }
}
