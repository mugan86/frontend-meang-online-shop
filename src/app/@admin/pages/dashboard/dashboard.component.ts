import { Component, OnInit } from '@angular/core';
import { TitleService } from '@admin/core/services/title.service';
import { LABEL } from '@admin/core/constants/title.constants';
import { IGeneralInfo } from '@shared/stats/general-info/general-info.interface';
import { DashboardService } from '@admin/core/services/dashboard.service';
import { loadData, closeAlert } from '@shared/alerts/alerts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: Array<IGeneralInfo> = [
    {
      icon: 'fas fa-users',
      title: 'Usuarios',
      value: 'users'
    },
    {
      icon: 'fas fa-store-alt',
      title: 'Productos en venta',
      value: 'shopProducts',
    },
    {
      icon: 'fas fa-tags',
      title: 'Tags',
      value: 'tags',
    },
    {
      icon: 'fa-atlas fas',
      title: 'Géneros',
      value: 'genres'
    },
    {
      icon: 'fa-gamepad fas',
      title: 'Juegos',
      value: 'games'
    },
    {
      icon: 'fa-angellist fab',
      title: 'Plataformas',
      value: 'platforms'
    }
  ];
  result;
  load = true;
  constructor(private titleService: TitleService, private dashboard: DashboardService) {}

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
    console.log(this.items);
    this.load = true;
    loadData('Cargando datos', 'Espera miestras carga las estadísticas');
    this.dashboard.getStats().subscribe((result) => {
      this.result = result;
      this.items.map(item => item.value = result[item.value]);
      closeAlert();
      this.load = false;
    });
  }
}
