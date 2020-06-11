import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@core/interfaces/menu-item.interface';
import adminMenuItems from '@data/menus/admin.json';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: Array<IMenuItem> = adminMenuItems;
}
