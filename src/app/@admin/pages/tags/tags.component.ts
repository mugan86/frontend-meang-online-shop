import { TAG_LIST_QUERY } from '@graphql/operations/query/tag';
import { Component, OnInit } from '@angular/core';
import { ITableColumns } from '@core/interfaces/table-columns.interface';
import { DocumentNode } from 'graphql';
import { IResultData } from '@core/interfaces/result-data.interface';
import { TagsService } from './tags.service';
import { optionsWithDetails, formBasicDialog } from '@shared/alerts/alerts';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { ACTIVE_FILTERS } from '@core/constants/filters';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  query: DocumentNode = TAG_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  include: boolean;
  columns: Array<ITableColumns>;
  filterActiveValues = ACTIVE_FILTERS.ALL;
  constructor(private service: TagsService) {}
  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'tags',
      definitionKey: 'tags',
    };
    this.include = false;
    this.columns = [
      {
        property: 'id',
        label: '#',
      },
      {
        property: 'name',
        label: 'Tag',
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
    const tag = $event[1];
    // Cogemos el valor por defecto
    const defaultValue =
      tag.name !== undefined && tag.name !== '' ? tag.name : '';
    const html = `<input id="name" value="${defaultValue}" class="swal2-input" required>`;
    // Teniendo en cuenta el caso, ejecutar una acción
    switch (action) {
      case 'add':
        // Añadir el item
        this.addForm(html);
        break;
      case 'edit':
        this.updateForm(html, tag);
        break;
      case 'info':
        const result = await optionsWithDetails(
          'Detalles',
          `${tag.name} ${tag.lastname}<br/>
          <i class="fas fa-envelope-open-text"></i>&nbsp;&nbsp;${tag.email}`,
          tag.active !== false ? 375 : 400,
          '<i class="fas fa-edit"></i> Editar', // true
          tag.active !== false
            ? '<i class="fas fa-lock"></i> Bloquear'
            : '<i class="fas fa-lock-open"></i> Desbloquear'
        ); // false
        if (result) {
          this.updateForm(html, tag);
        } else if (result === false) {
          this.unblockForm(tag, tag.active !== false ? false : true);
        }
        break;
      case 'block':
        this.unblockForm(tag, false);
        break;
      case 'unblock':
        this.unblockForm(tag, true);
        break;
      default:
        break;
    }
  }
  private async addForm(html: string) {
    const result = await formBasicDialog('Añadir tag', html, 'name');
    this.addtag(result);
  }
  private addtag(result) {
    if (result.value) {
      this.service.add(result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  private async updateForm(html: string, tag: any) {
    const result = await formBasicDialog('Modificar tag', html, 'name');
    this.updateTag(tag.id, result);
  }

  private updateTag(id: string, result) {
    if (result.value) {
      this.service.update(id, result.value).subscribe((res: any) => {
        if (res.status) {
          basicAlert(TYPE_ALERT.SUCCESS, res.message);
          return;
        }
        basicAlert(TYPE_ALERT.WARNING, res.message);
      });
    }
  }

  private unblockTag(id: string, unblock: boolean) {
    this.service.unblock(id, unblock).subscribe((res: any) => {
      if (res.status) {
        basicAlert(TYPE_ALERT.SUCCESS, res.message);
        return;
      }
      basicAlert(TYPE_ALERT.WARNING, res.message);
    });
  }

  private async unblockForm(tag: any, unblock: boolean) {
    const result = unblock
      ? await optionsWithDetails(
          '¿Desbloquear?',
          `Si desbloqueas el tag seleccionado, se mostrará en la lista y podrás hacer compras y ver toda la información`,
          500,
          'No, no desbloquear',
          'Si, desbloquear'
        )
      : await optionsWithDetails(
          '¿Bloquear?',
          `Si bloqueas el tag seleccionado, no se mostrará en la lista`,
          430,
          'No, no bloquear',
          'Si, bloquear'
        );
    if (result === false) {
      // Si resultado falso, queremos bloquear / desbloquear
      this.unblockTag(tag.id, unblock);
    }
  }
}
