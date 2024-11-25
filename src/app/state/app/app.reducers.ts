import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { usersReducers } from '../users/users.reducers';
import { ordersReducers } from '../orders/orders.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: usersReducers,
  orders: ordersReducers
};
