import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/app/app.state';
import { GetUsers } from './state/users/users.actions';
import { Observable, combineLatest, tap } from 'rxjs';
import { CallState, ProcessState, getCallStateError } from './state/state.model';
import { selectUsersCallState } from './state/users/users.selector';
import { Router } from '@angular/router';
import { GetOrders } from './state/orders/orders.actions';
import { selectOrdersCallState } from './state/orders/orders.selector';

@Component({
  selector: 'fmr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  ProcessState = ProcessState;
  getCallStateError = getCallStateError;
  usersCallState$?: Observable<CallState> = this.store.select(selectUsersCallState);
  ordersCallState$?: Observable<CallState> = this.store.select(selectOrdersCallState);

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.router.navigate(['/'], { replaceUrl: true });
    this.bootstrapData();
    this.loadUsersPage();
  }

  bootstrapData(): void {
    this.store.dispatch(new GetUsers());
    this.store.dispatch(new GetOrders());
  }

  loadUsersPage(): void {
    combineLatest([
      this.store.select(selectUsersCallState),
      this.store.select(selectOrdersCallState),
    ]).pipe(
      tap(([usersCallState, ordersCallState]) => {
        if (usersCallState === ProcessState.COMPLETED && ordersCallState === ProcessState.COMPLETED) {
          this.router.navigate(['/users'], { replaceUrl: true });
        }
      })
    ).subscribe();
  }
}
