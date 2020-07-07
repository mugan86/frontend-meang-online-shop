import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { ShopGuard } from '@core/guards/shop.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'games/details/:id',
        loadChildren: () => import('./games/details/details.module').then(m => m.DetailsModule)
      },
      {
        path: 'games/:type/:filter',
        loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./forms/checkout/checkout.module').then(m => m.CheckoutModule),
        canActivate: [ShopGuard]
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        canActivate: [ShopGuard]
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./forms/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./forms/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'active/:token',
        loadChildren: () => import('./forms/active/active.module').then(m => m.ActiveModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('./forms/forgot/forgot.module').then(m => m.ForgotModule)
      },
      {
        path: 'reset/:token',
        loadChildren: () => import('./forms/change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
