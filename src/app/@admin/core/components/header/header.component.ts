import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  toggledValue = true;
  userLabel: string;
  @Output() toggleChange = new EventEmitter<boolean>();
  constructor(private authService: AuthService, private router: Router) {
    this.authService.accessVar$.subscribe((result) => {
      console.log('dddd', result);
      if (!result.status) {
        this.router.navigate(['/']);
        return;
      }
      this.userLabel = `${ result.user?.name } ${ result.user?.lastname }`;
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
