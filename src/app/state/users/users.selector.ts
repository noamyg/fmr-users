import { createSelector } from '@ngrx/store';
import { AppState } from '../app/app.state';
import { userAdapter, UsersState } from './users.state';

const usersSelect = (state: AppState) => state.users;

export const selectUsers = createSelector(
  usersSelect,
  userAdapter.getSelectors().selectAll
);

export const selectSelectedUser = createSelector(
  usersSelect,
  (state: UsersState) => state.users.selectedUserId
  
);

export const selectUsersCallState = createSelector(
  usersSelect,
  (state: UsersState) => state.usersCallState
);

export const selectFavoriteUserIds = createSelector(
  usersSelect,
  (state: UsersState) => state.favoriteUserIds
);