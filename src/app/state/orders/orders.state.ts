import { Order } from 'src/app/users/model/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CallState, ProcessState } from '../state.model';

export const ordersAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export interface OrdersState extends EntityState<Order> {
  orders: {
    entities: { [id: number]: Order},
  },
  ordersCallState: CallState;
}

export const initialOrdersState: OrdersState = ordersAdapter.getInitialState({
  orders: {
    entities: []
  },
  ordersCallState: ProcessState.INIT,
});