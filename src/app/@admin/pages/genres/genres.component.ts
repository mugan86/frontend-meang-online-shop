import { ACTIVE_FILTERS } from '@core/constants/filters';
import { basicAlert } from '@shared/alerts/toasts';
import { GENRE_LIST_QUERY } from '@graphql/operations/query/genre';
import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { IResultData } from '@core/interfaces/result-data.interface';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { formBasicDialog, optionsWithDetails } from '@shared/alerts/alerts';
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
  filterActiveValues = ACTIVE_FILTERS.ALL;
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
      {
        property: 'active',
        label: '¿Activo?',
      },
    ];
  }

  async takeAction($event) {
    // Coger la información para las acciones
    const action = $event[0];
    const genre = $event[1];
    // Cogemos el valor por defecto
    const defaultValue =
      genre.name !== undefined && genre.name !== '' ? genre.name : '';
    const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;
    // Teniendo en cuenta el caso, ejecutar una acción
    switch (action) {
      case 'add':
        // Añadir el item
        this.addForm(html);
        break;
      case 'edit':
        this.updateForm(html, genre);
        break;
      case 'info':
        const result = await optionsWithDetails(
          'Detalles',
          `${genre.name} (${genre.slug})`,
          genre.active !== false ? 375 : 400,
          '<i class="fas fa-edit"></i> Editar', // true
          genre.active !== false
            ? '<i class="fas fa-lock"></i> Bloquear'
            : '<i class="fas fa-lock-open"></i> Desbloquear'
        );
        if (result) {
          this.updateForm(html, genre);
        } else if (result === false) {
          this.unblockForm(genre, (genre.active !== false) ? false : true);
        }
        break;
      case 'block':
        this.unblockForm(genre, false);
        break;
      case 'unblock':
          this.unblockForm(genre, true);
          break;
      default:
        break;
    }
  }
  private async addForm(html: string) {
    const result = await formBasicDialog('Añadir género', html, 'name');
    console.log(result);
    this.addGenre(result);
  }
  private addGenre(result) {
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

  private async updateForm(html: string, genre: any) {
    const result = await formBasicDialog('Modificar género', html, 'name');
    console.log(result);
    this.updateGenre(genre.id, result);
  }

  private updateGenre(id: string, result) {
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

  private blockGenre(id: string, unblock: boolean) {
    this.service.unblock(id, unblock).subscribe((res: any) => {
      console.log(res, id, unblock);
      if (res.status) {
        basicAlert(TYPE_ALERT.SUCCESS, res.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, res.message);
    });
  }

  private async unblockForm(genre: any, unblock: boolean) {
    const result = unblock
      ? await optionsWithDetails(
          '¿Desbloquear?',
          `Si desbloqueas el género seleccionado, se mostrará en la lista y podrás hacer compras y ver toda la información`,
          500,
          'No, no desbloquear',
          'Si, desbloquear'
        )
      : await optionsWithDetails(
          '¿Bloquear?',
          `Si bloqueas el género seleccionado, no se mostrará en la lista`,
          430,
          'No, no bloquear',
          'Si, bloquear'
        );
    if (result === false) {
      // Si resultado falso, queremos bloquear
      this.blockGenre(genre.id, unblock);
    }
  }
}
