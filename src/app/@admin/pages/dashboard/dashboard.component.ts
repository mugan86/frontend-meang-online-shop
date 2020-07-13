import { Component, OnInit } from '@angular/core';
import { TitleService } from '@admin/core/services/title.service';
import { LABEL } from '@admin/core/constants/title.constants';
import { IGeneralInfo } from '@shared/stats/general-info/general-info.interface';

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
      value: 364,
    },
    {
      icon: 'fas fa-store-alt',
      title: 'Productos en venta',
      value: 7894,
    },
    {
      icon: 'fas fa-tags',
      title: 'Tags',
      value: 9382,
    },
    {
      icon: 'fa-atlas fas',
      title: 'Géneros',
      value: 3823
    },
    {
      icon: 'fa-gamepad fas',
      title: 'Juegos',
      value: 233
    },
    {
      icon: 'fa-angellist fab',
      title: 'Plataformas',
      value: 233
    }
  ];
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
    console.log(this.items);
  }
}
