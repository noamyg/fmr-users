import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User, UserStatus } from '../../model/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.state';
import { AddToFavorites, DeleteUser, RemoveFromFavorites, SetSelectedUser, UpdateUser } from 'src/app/state/users/users.actions';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogComponent } from '@fmr-users/libs/shared-ui';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, skipWhile } from 'rxjs';
import { UserFormDlgComponent } from '../user-form-dlg/user-form-dlg.component';
import { DialogUtil } from '@fmr-users/libs/utils';
import { selectSelectedUser, selectUsers } from 'src/app/state/users/users.selector';

@UntilDestroy()
@Component({
  selector: 'fmr-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() total?: number;
  @Input() isFavorite?: boolean;
  selectedUserId$: Observable<number | undefined> = this.store.select(selectSelectedUser);
  UserStatus = UserStatus;

  constructor(
    private dlgService: DialogService,
    private store: Store<AppState>
  ) { }

  async deleteUser(): Promise<void> {
    const dialog = this.dlgService.open(ConfirmDialogComponent, {
      data: {
        body: 'Are you sure you want to delete this user?'
      }
    });
    dialog.onClose.pipe(skipWhile(data => !data), untilDestroyed(this)).subscribe(async () => {
      this.store.dispatch(new DeleteUser(this.user.id));
    });
  }

  openUserDialog(): void {
    const dialog = this.dlgService.open(UserFormDlgComponent, {
      ...DialogUtil.DEFAULT_OPTIONS,
      data: {
        user: this.user
      }
    });
    dialog.onClose.pipe(skipWhile(data => !data), untilDestroyed(this)).subscribe(async (data: User) => {
      this.store.dispatch(new UpdateUser(data));
    });
  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.store.dispatch(new RemoveFromFavorites(this.user.id));
    } else {
      this.store.dispatch(new AddToFavorites(this.user.id));
    }
  }

  setSelectedUser(): void {
    this.store.dispatch(new SetSelectedUser(this.user));
  }

}
