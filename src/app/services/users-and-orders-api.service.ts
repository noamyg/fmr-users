import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, User } from '../users/model/user.model';
import { Observable, of } from 'rxjs';
import { USERS_MOCK, ORDERS_MOCK } from './users-and-orders-mock';


@Injectable({
  providedIn: 'root',
})
export class UsersAndOrdersApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return of(USERS_MOCK);
  }

  getOrders(): Observable<Order[]> {
    return of(ORDERS_MOCK);
  }
}
