import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeaderModule } from './header/header.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './state/app/app.reducers';
import { UsersEffects } from './state/users/users.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/assets/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from '@fmr-users/libs/shared-ui';
import { HttpClientModule } from '@angular/common/http';
import { UsersAndOrdersApiService } from './services/users-and-orders-api.service';
import { OrdersEffects } from './state/orders/orders.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoaderComponent,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UsersEffects, OrdersEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    UsersAndOrdersApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
