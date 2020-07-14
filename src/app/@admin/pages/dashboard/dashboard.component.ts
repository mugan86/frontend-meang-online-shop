import { Component, OnInit } from '@angular/core';
import { TitleService } from '@admin/core/services/title.service';
import { LABEL } from '@admin/core/constants/title.constants';
import { IGeneralInfo } from '@shared/general-info/general-info.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
      value: 'shopProducts'
    }
  ];
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
  }

}
