import { environment } from '@envs/environment';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { StripePaymentService } from '@mugan86/stripe-payment-form';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  key = environment.stripeKey;
  constructor(private auth: AuthService, private router: Router,
              private stripePaymentService: StripePaymentService) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir a login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
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
