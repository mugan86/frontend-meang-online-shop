import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggledCheck = new EventEmitter<boolean>();
  toggleValue = true;

  toggled() {
    if (this.toggleValue === undefined) {
      this.toggleValue = true;
    }
    this.toggleValue = !this.toggleValue;
    console.log('toggled', this.toggleValue);
    this.toggledCheck.emit(this.toggleValue);
  }

}
