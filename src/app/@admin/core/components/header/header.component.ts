import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  toggledValue = true;
  userLabel: string;
  @Output() toggleChange = new EventEmitter<boolean>();
  constructor(private authService: AuthService) {
    this.authService.accessVar$.subscribe((meData: IMeData) => {
      this.userLabel = `${ meData.user?.name } ${ meData.user?.lastname }`;
    });
  }
  ngOnInit() {
    this.authService.start();
  }
  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    this.toggleChange.emit(this.toggledValue);
  }

  logout() {
    this.authService.resetSession();
  }
}
