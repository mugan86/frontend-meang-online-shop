import { USERS_LIST_QUERY } from './../../@graphql/operations/query/user';
import { Component, OnInit, Input } from '@angular/core';
import { DocumentNode } from 'graphql';
import { TablePaginationService } from './table-pagination.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Input() query: DocumentNode = USERS_LIST_QUERY;
  @Input() context: object;
  @Input() itemsPage = 20;
  @Input() include = true;
  constructor(private service: TablePaginationService) { }

  ngOnInit(): void {
    if (this.query === undefined) {
      throw new Error('Query is undefined, please add');
    }
    this.loadData();
  }

  loadData() {
    this.service.getCollectionData(this.query, {include: this.include}, {}).subscribe(result => {
      console.log(result);
    });
  }

}
