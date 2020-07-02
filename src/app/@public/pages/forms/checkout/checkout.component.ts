import { environment } from '@envs/environment';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { StripePaymentService } from '@mugan86/stripe-payment-form';
import { CURRENCY_CODE } from '@core/constants/config';

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
              private stripePaymentService: StripePaymentService) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir a login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
      console.log(this.meData);
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
    // Enviar par obtener token de la tarjeta, para hacer uso de ese valor para el proceso del pago
    this.stripePaymentService.takeCardToken(true);
  }

}
