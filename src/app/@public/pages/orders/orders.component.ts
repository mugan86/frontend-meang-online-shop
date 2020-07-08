import { Component, OnInit, HostListener } from '@angular/core';
import { CURRENCY_SELECT } from '@core/constants/config';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
import { take } from 'rxjs/internal/operators/take';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { loadData, closeAlert } from '@shared/alerts/alerts';

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
  load = true;

  loadMoreButtonShow = true;

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
    loadData('Cargando los pedidos', 'Espera mientras obtenemos los pedidos');
    this.chargeService
      .listByCustomer(
        this.meData.user.stripeCustomer,
        '',
        this.startingAfter,
        10
      )
      .pipe(take(1))
      .subscribe((data: { hasMore: boolean; charges: Array<ICharge> }) => {
        data.charges.map((item: ICharge) => this.charges.push(item));
        this.hasMore = data.hasMore;
        if (this.hasMore) {
          this.startingAfter = data.charges[data.charges.length - 1].id;
        } else {
          this.startingAfter = '';
          this.loadMoreButtonShow = false;
          console.log('No hay + items');
        }
        this.load = false;
        closeAlert();
      });
  }
}
