import { createSelector } from '@ngrx/store';
import { AppState } from '../app/app.state'
import { ordersAdapter, OrdersState } from './orders.state';

const ordersSelect = (state: AppState) => state.orders;

export const selectOrders = createSelector(
  ordersSelect,
  ordersAdapter.getSelectors().selectAll
);

export const selectUserOrders = (userId: number) => createSelector(
  ordersSelect,
  (state: OrdersState) => {
    return ordersAdapter.getSelectors().selectAll(state).filter(state => state.userId === userId);
  }
);

export const selectUsersTotalOrderAmount = () => createSelector(
  ordersSelect,
  (state: OrdersState) => {
    return ordersAdapter
      .getSelectors()
      .selectAll(state)
      .reduce((acc, { userId, total }) => {
        acc[userId] = (acc[userId] || 0) + total;
        return acc;
      }, {} as Record<number, number>)
  }
);

export const selectOrdersCallState = createSelector(
  ordersSelect,
  (state: OrdersState) => state.ordersCallState
);
