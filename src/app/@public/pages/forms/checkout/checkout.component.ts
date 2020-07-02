import { CustomerService } from '@core/services/customer.service';
import { environment } from '@envs/environment.prod';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { StripePaymentService } from '@mugan86/stripe-payment-form';
import { CURRENCY_CODE } from '@core/constants/config';
import { infoEventAlert } from '@shared/alerts/alerts';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  key = environment.stripeKey;
  address = '';
  token = '';
  currencyCode = CURRENCY_CODE;
  constructor(private auth: AuthService, private router: Router,
              private stripePaymentService: StripePaymentService,
              private customerStripe: CustomerService) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir a login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
    });

    this.stripePaymentService.cardTokenVar$.subscribe((token: string) => {
      this.token = token;
      if (this.token.indexOf('tok_') > -1 && this.meData.status && this.address !== '') {
        console.log('Preparado para enviar la info del pedido');
        // Datos que tenemos que tener, la divisa seleccionada
        // ID del cliente,
        // Descripción de lo que vamos a pagar
        // Token ( o no, dependiendo si ya tenemos)
        // Lo que vamos a pagar
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
    localStorage.removeItem('route_after_login');
  }

  sendData() {
    if (this.meData.user.stripeCustomer === null) {
      console.log('No tenemos cliente de stipe asociado');
      infoEventAlert('Confirmar datos de cliente', 'Debemos de confirmar los datos para poder realizar el pago');
      return;
    }
    // Enviar par obtener token de la tarjeta, para hacer uso de ese valor para el proceso del pago
    this.stripePaymentService.takeCardToken(true);
  }

}
