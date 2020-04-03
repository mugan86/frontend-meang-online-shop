import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        // do something...
        console.log(this.router.url);
        if (this.router.url === '/') {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
