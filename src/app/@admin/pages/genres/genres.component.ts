import { basicAlert } from '@shared/alerts/toasts';
import { GENRE_LIST_QUERY } from '@graphql/operations/query/genre';
import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { IResultData } from '@core/interfaces/result-data.interface';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { formBasicDialog, infoDetailsBasic } from '@shared/alerts/alerts';
import { GenresService } from './genres.service';
import { TYPE_ALERT } from '@shared/alerts/values.config';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  query: DocumentNode = GENRE_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  include: boolean;
  columns: Array<ITableColumns>;
  constructor(private service: GenresService) {}
  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'genres',
      definitionKey: 'genres',
    };
    this.include = false;
    this.columns = [
      {
        property: 'id',
        label: '#',
      },
      {
        property: 'name',
        label: 'Nombre del género',
      },
      {
        property: 'slug',
        label: 'Slug',
      },
    ];
  }

  async takeAction($event) {
    console.log($event[0], $event[1]);
    const action = $event[0];
    const genre = $event[1];
    console.log(genre);
    if (action === 'edit' || action === 'add') {
      let defaultValue = '';
      if (genre.name !== undefined && genre.name !== '') {
        defaultValue = genre.name;
      }
      const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;
      console.log(html);
      if (action === 'add') {
        const result = await formBasicDialog('Añadir género', html, 'name');
        console.log(result);
        this.addGenre(result);
        return;
      }
      if (action === 'edit') {
        const result = await formBasicDialog('Modificar género', html, 'name');
        console.log(result);
        this.updateGenre(genre.id, result);
        return;
      }
    } else {
      if (action === 'info') {
        infoDetailsBasic('Detalles', `${genre.name} (${genre.slug})`, 375);
        return;
      }
    }
  }

  addGenre(result) {
    if (result.value) {
      this.service.add(result.value).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  updateGenre(id: string, result) {
    console.log(id, result.value);
    if (result.value) {
      this.service.update(id, result.value).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }
}
