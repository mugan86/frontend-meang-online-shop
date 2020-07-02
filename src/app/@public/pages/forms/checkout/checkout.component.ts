import { ChargeService } from './../../../../@core/services/stripe/charge.service';
import { CustomerService } from '@core/services/stripe/customer.service';
import { environment } from '@envs/environment.prod';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { StripePaymentService } from '@mugan86/stripe-payment-form';
import { CURRENCY_CODE } from '@core/constants/config';
import { infoEventAlert } from '@shared/alerts/alerts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
import { take } from 'rxjs/internal/operators/take';
import { CartService } from '@shop/core/services/cart.service';
import { IPayment } from '@core/interfaces/stripe/payment.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  key = environment.stripeKey;
  address = '';
  currencyCode = CURRENCY_CODE;
  constructor(
    private auth: AuthService,
    private router: Router,
    private stripePaymentService: StripePaymentService,
    private customerStripe: CustomerService,
    private cartService: CartService,
    private chargeService: ChargeService
  ) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir a login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
    });

    this.stripePaymentService.cardTokenVar$
      .pipe(take(1))
      .subscribe((token: string) => {
        if (
          token.indexOf('tok_') > -1 &&
          this.meData.status &&
          this.address !== ''
        ) {
          console.log('Preparado para enviar la info del pedido');
          // Datos que tenemos que tener, la divisa seleccionada
          console.log('Divisa', this.currencyCode);
          // ID del cliente,
          console.log('Customer', this.meData.user.stripeCustomer);
          // Descripción de lo que vamos a pagar
          const description = this.cartService.orderDescription();
          console.log('Description: \n', description);
          // Token ( o no, dependiendo si ya tenemos) OK
          // Lo que vamos a pagar
          const amount = String(this.cartService.cart.total);
          console.log('Total pay: ', amount, this.currencyCode);
          const payment: IPayment = {
            token,
            amount,
            description,
            customer: this.meData.user.stripeCustomer,
            currency: this.currencyCode,
          };
          this.chargeService
            .chargeOrder(payment)
            .pipe(take(1))
            .subscribe((result: {
              status: boolean;
              message: string;
              charge: { receiptUrl: string }
            }) => {
              console.log(result.status, result.message, result.charge.receiptUrl);
              if (result.status) {
                this.cartService.clear();
              }
            });
        }
      });
  }

  ngOnInit(): void {
    this.auth.start();
    this.cartService.initialize();
    if (localStorage.getItem('checkout_address')) {
      this.address = localStorage.getItem('checkout_address');
      localStorage.removeItem('checkout_address');
    }
    localStorage.removeItem('route_after_login');
  }

  async sendData() {
    if (this.meData.user.stripeCustomer === null) {
      console.log('No tenemos cliente de stipe asociado');
      await infoEventAlert(
        'Confirmar datos de cliente',
        'Debemos de confirmar los datos para poder realizar el pago'
      );
      console.log('Creando cliente');
      const stripeName = `${this.meData.user.name} ${this.meData.user.lastname}`;
      this.customerStripe
        .create(stripeName, this.meData.user.email)
        .subscribe(async (result: { status: boolean }) => {
          console.log(result);
          if (result.status) {
            // El cliente se confirmado correctamente, tendremos que reiniciar la sesión
            await infoEventAlert(
              'Cliente confirmado satisfactoriamente',
              'Reiniciar la sesión',
              TYPE_ALERT.SUCCESS
            );
            localStorage.setItem('route_after_login', this.router.url);
            localStorage.setItem('checkout_address', this.address);
            this.auth.resetSession();
          } else {
            // await infoEventAlert('Cliente confirmado satisfactoriamente', 'Reiniciar la sesión', TYPE_ALERT.SUCCESS);
          }
        });
      return;
    }
    // Enviar par obtener token de la tarjeta, para hacer uso de ese valor para el proceso del pago
    this.stripePaymentService.takeCardToken(true);
  }
}
