import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggledValue = true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    this.toggleChange.emit(this.toggledValue);
  }
}
