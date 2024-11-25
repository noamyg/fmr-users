import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Order, User } from '../../model/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.state';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { selectUserOrders } from 'src/app/state/orders/orders.selector';

@UntilDestroy()
@Component({
  selector: 'fmr-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOrdersComponent {
  @Input() user!: User;
  orders$?: Observable<Order[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.orders$ = this.store.select(selectUserOrders(this.user?.id));
  }
  
}
