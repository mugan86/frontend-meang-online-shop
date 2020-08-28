import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { NgModule } from '@angular/core';
import { ApolloLink, split } from 'apollo-link';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: getLink(httpLink)
      };
    },
    deps: [HttpLink]
  }],
})
export class GraphqlModule { }

function getLink(httpLink: HttpLink) {
  // Para capturar los errores de consulta y/o de red
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Errors', graphQLErrors);
    }

    if (networkError) {
      console.log('Network Errors', networkError);
    }
  });
  const uri = environment.backend;
  const urlLink = ApolloLink.from([errorLink, httpLink.create({ uri })]);
  const subscriptionLink = new WebSocketLink({
    uri: environment.backendWs,
    options: {
      reconnect: true
    }
  });
  return split(
    ({query}) => {
      const { kind, operation}: any = getMainDefinition(query);
      return kind === 'OperationDefinition' &&  operation === 'subscription';
    },
    subscriptionLink,
    urlLink
  );
}
