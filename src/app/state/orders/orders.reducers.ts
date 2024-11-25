import { ProcessState } from '../state.model';
import { EOrdersActions, OrdersActions } from './orders.actions';
import { initialOrdersState, ordersAdapter, OrdersState } from './orders.state';

export function ordersReducers(state = initialOrdersState, action: OrdersActions): OrdersState {
  switch (action.type) {
    case EOrdersActions.GetOrders:
      return {
        ...state,
        ordersCallState: ProcessState.PROCESSING
      };
    case EOrdersActions.GetOrdersSuccess:
      return ordersAdapter.setAll(action.payload, {
        ...state,
        ordersCallState: ProcessState.COMPLETED
      });
    case EOrdersActions.GetOrdersFailure:
      return {
        ...state,
        ordersCallState: { errorMsg: action.payload }
      };
    default:
      return state;
  }
}