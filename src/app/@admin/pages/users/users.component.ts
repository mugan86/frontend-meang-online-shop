import { USERS_LIST_QUERY } from '@graphql/operations/query/user';
import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { IResultData } from '@core/interfaces/result-data.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  query: DocumentNode = USERS_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  include: boolean;

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 1;
    this.resultData = {
      listKey: 'users',
      definitionKey: 'users'
    };
    this.include = true;
  }

}
