import { Action } from '@ngrx/store';
import { Order } from 'src/app/users/model/user.model';

export enum EOrdersActions {
  GetOrders = '[Users] Get Orders',
  GetOrdersSuccess = '[Users] Get Orders Success',
  GetOrdersFailure = '[Users] Get Orders Failure',
}

export class GetOrders implements Action {
  public readonly type = EOrdersActions.GetOrders;
}

export class GetOrdersSuccess implements Action {
  public readonly type = EOrdersActions.GetOrdersSuccess;
  constructor(public payload: Order[]) {}
}

export class GetOrdersFailure implements Action {
  public readonly type = EOrdersActions.GetOrdersFailure;
  constructor(public payload: string) {}
}


export type OrdersActions =
    GetOrders | GetOrdersSuccess | GetOrdersFailure
