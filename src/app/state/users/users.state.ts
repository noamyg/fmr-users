import { Order, User } from 'src/app/users/model/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CallState, ProcessState } from '../state.model';
import { LocalStorageKeys } from '@fmr-users/libs/utils';

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface UsersState extends EntityState<User> {
  users: {
    entities: { [id: number]: User},
    selectedUserId: number | undefined
  },
  usersCallState: CallState;
  ordersCallState: CallState;
  favoriteUserIds?: number[];
}

export const initialUsersState: UsersState = userAdapter.getInitialState({
  users: {
    entities: [],
    selectedUserId: undefined
  },
  usersCallState: ProcessState.INIT,
  ordersCallState: ProcessState.INIT,
  favoriteUserIds: localStorage.getItem(LocalStorageKeys.FAVORITE_USERS)?.split(',').map(userId => Number(userId))
});