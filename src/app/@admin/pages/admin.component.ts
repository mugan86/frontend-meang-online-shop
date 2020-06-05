import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  toggledValue = true;
  toggled($event) {
    this.toggledValue = $event;
  }
}
