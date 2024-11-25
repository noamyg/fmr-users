import { RouterReducerState } from '@ngrx/router-store';
import { UsersState, initialUsersState } from '../users/users.state';
import { initialOrdersState, OrdersState } from '../orders/orders.state';

export interface AppState {
  router?: RouterReducerState;
  users: UsersState;
  orders: OrdersState;
}

export const initialAppState: AppState = {
  users: initialUsersState,
  orders: initialOrdersState
};

export const getInitialState = (): AppState => initialAppState;
