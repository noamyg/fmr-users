import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app/app.state';
import { EOrdersActions, GetOrders, GetOrdersFailure, GetOrdersSuccess } from './orders.actions';
import { UsersAndOrdersApiService } from 'src/app/services/users-and-orders-api.service';

@Injectable()
export class OrdersEffects {
  getOrders$ = createEffect(() => this.actions.pipe(
    ofType<GetOrders>(EOrdersActions.GetOrders),
    switchMap(() => this.usersAndOrdersApiService.getOrders().pipe(
      map(data => new GetOrdersSuccess(data)),
      catchError(error => of(new GetOrdersFailure(error?.message ?? 'error'))),
    ))
  ));

  constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private usersAndOrdersApiService: UsersAndOrdersApiService
  ) {}
}