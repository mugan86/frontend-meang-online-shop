import { Component, OnInit } from '@angular/core';
import { TitleService } from '@admin/core/services/title.service';
import { LABEL } from '@admin/core/constants/title.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
  }

}
