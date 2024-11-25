import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from '../state/app/app.state';
import { Store, select } from '@ngrx/store';
import { Observable, skipWhile, withLatestFrom } from 'rxjs';
import { User } from './model/user.model';
import { selectUsers, selectFavoriteUserIds } from '../state/users/users.selector';
import { UserFormDlgComponent } from './components/user-form-dlg/user-form-dlg.component';
import { DialogService } from 'primeng/dynamicdialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AddUser, UpdateUser } from '../state/users/users.actions';
import { DialogUtil, skipInitial } from '@fmr-users/libs/utils';
import { selectUsersTotalOrderAmount } from '../state/orders/orders.selector';

@UntilDestroy()
@Component({
  selector: 'fmr-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPage {
  users$: Observable<User[] | undefined> = this.store.pipe(select(selectUsers), skipInitial());
  favoriteUserIds$: Observable<number[] | undefined> = this.store.pipe(select(selectFavoriteUserIds), skipInitial());
  usersTotalOrders$: Observable<Record<number, number>> = this.store.select(selectUsersTotalOrderAmount());
  showOnlyFavorites: boolean = false;

  constructor(
    private dlgService: DialogService,
    private store: Store<AppState>
  ) { }

  openUserFormDialog(): void {
    const dialog = this.dlgService.open(UserFormDlgComponent, {
      ...DialogUtil.DEFAULT_OPTIONS
    });
    dialog.onClose.pipe(
      skipWhile(data => !data),
      withLatestFrom(this.store.pipe(select(selectUsers))),
      untilDestroyed(this)
    ).subscribe(([data, users]: [User, User[]]) => {
      if (users.find(user => `${user.id}` === `${data.id}`)) {
        this.store.dispatch(new UpdateUser(data))
      } else {
        this.store.dispatch(new AddUser(data));
      }
    });
  }

}
