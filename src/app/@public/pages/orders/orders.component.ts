import { take } from 'rxjs/internal/operators/take';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { CURRENCY_SELECT } from '@core/constants/config';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { AuthService } from '@core/services/auth.service';
import { ChargeService } from '@shop/core/services/stripe/charge.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  currencySymbol = CURRENCY_SELECT;
  meData: IMeData;
  startingAfter = '';
  hasMore = false;
  charges: Array<ICharge> = [];
  constructor(
    private auth: AuthService,
    private chargeService: ChargeService
  ) {
    this.auth.accessVar$.pipe(take(1)).subscribe((meData: IMeData) => {
      this.meData = meData;
      // Si tenemos información cargar con el cliente
      if (this.meData.user.stripeCustomer !== '') {
        console.log(this.meData);
        this.loadData();
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
  }

  loadData() {
    console.log('Cargando datos...');
    this.chargeService.listByCustomer(
      this.meData.user.stripeCustomer,
      10, this.startingAfter, ''
    ).pipe(take(1)).subscribe((data: {hasMore: boolean, charges: Array<ICharge>}) => {
      console.log(data);
      this.charges = data.charges;
    });
  }
}
