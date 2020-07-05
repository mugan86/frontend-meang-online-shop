import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StripePaymentService } from '@mugan86/stripe-payment-form';
import { take } from 'rxjs/internal/operators/take';
import { CartService } from '@shop/core/services/cart.service.ts.service';
import { CURRENCY_SELECT, CURRENCY_CODE } from '@core/constants/config';
import { infoEventAlert } from '@shared/alerts/alerts';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  key = environment.stripePublicKey;
  address = '';
  constructor(private auth: AuthService, private router: Router,
              private stripePayment: StripePaymentService,
              private cartService: CartService) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir a login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
    });

    this.stripePayment.cardTokenVar$.pipe(take(1)).subscribe((token: string) => {
      if (token.indexOf('tok_') > -1 && this.meData.status && this.address !== '') {
        // Podemos enviar los datos
        console.log('Podemos enviar la info correctamente: ', token);
        // Descripción del pedido (tenemos que crear función en el carrito)
        // Divisa
        console.log('Símbolo', CURRENCY_SELECT, 'Código: ', CURRENCY_CODE);
        // Client de stripe
        console.log(this.meData.user.stripeCustomer);
        // Total a pagar
        console.log('Total pagar: ', this.cartService.cart.total);
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
    this.cartService.initialize();
    localStorage.removeItem('route_after_login');
  }

  sendData() {
    if (this.meData.user.stripeCustomer === null) {
      // Alerta para mostrar info
      infoEventAlert('Cliente no existe', 'Necesitamos un cliente para realizar el pago');
      return;
    }
    this.stripePayment.takeCardToken(true);
  }

}
