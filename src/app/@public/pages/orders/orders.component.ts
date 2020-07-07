import { Component, OnInit } from '@angular/core';
import { CURRENCY_SELECT } from '@core/constants/config';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
import { take } from 'rxjs/internal/operators/take';
import { ICharge } from '@core/interfaces/stripe/charge.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  currencySymbol = CURRENCY_SELECT;
  hasMore = false;
  startingAfter = '';
  charges: Array<ICharge> = [];
  meData: IMeData;
  constructor(private auth: AuthService, private chargeService: ChargeService) {
    this.auth.accessVar$.pipe(take(1)).subscribe((meData: IMeData) => {
      this.meData = meData;
      this.loadData();
    });
  }

  ngOnInit(): void {
    this.auth.start();
  }
  loadData() {
    this.chargeService
      .listByCustomer(this.meData.user.stripeCustomer, '', '', 5)
      .pipe(take(1))
      .subscribe((data: { hasMore: boolean; charges: Array<ICharge> }) => {
        this.charges = data.charges;
        if (data.hasMore) {
          this.startingAfter = data.charges[data.charges.length - 1].id;
        } else {
          this.startingAfter = '';
          console.log('No hay + items');
        }
      });
  }
}
