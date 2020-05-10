import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { IResultData } from '@core/interfaces/result-data.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  query: DocumentNode;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  include: boolean;

  ngOnInit(): void {
  }

}
