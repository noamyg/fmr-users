import { cloneDeep } from 'lodash';
import { ProcessState } from '../state.model';
import { UsersActions, EUsersActions } from './users.actions';
import { UsersState, userAdapter, initialUsersState } from './users.state';

export function usersReducers(state = initialUsersState, action: UsersActions): UsersState {
  let stateFavoriteuserIds = [];
  switch (action.type) {
    case EUsersActions.GetUsers:
      return {
        ...state,
        usersCallState: ProcessState.PROCESSING
      };
    case EUsersActions.GetUsersSuccess:
      return userAdapter.setAll(action.payload, {
        ...state,
        usersCallState: ProcessState.COMPLETED
      });
    case EUsersActions.GetUsersFailure:
      return {
        ...state,
        usersCallState: { errorMsg: action.payload }
      };
    case EUsersActions.UpdateUserSuccess:
      return userAdapter.updateOne({ id: action.payload.id, changes: action.payload }, state);
    case EUsersActions.AddUserSuccess:
      return userAdapter.addOne(action.payload, state);
    case EUsersActions.DeleteUserSuccess:
      return userAdapter.removeOne(action.payload, state);
    case EUsersActions.SetSelectedUser:
      return {
        ...state,
        users: {
          ...state.users,
          selectedUserId: action.payload.id
        }
      }
    case EUsersActions.RemoveFromFavoritesSuccess:
      return {
        ...state,
        favoriteUserIds: (state.favoriteUserIds || []).filter(id => id !== action.payload)
      };
    case EUsersActions.AddToFavoritesSuccess:
      stateFavoriteuserIds = cloneDeep(state.favoriteUserIds) || [];
      stateFavoriteuserIds.push(action.payload);
      return {
        ...state,
        favoriteUserIds: stateFavoriteuserIds
      };
    case EUsersActions.RemoveFromFavoritesSuccess:
      stateFavoriteuserIds = cloneDeep(state.favoriteUserIds) || [];
      var ind = stateFavoriteuserIds.findIndex(fc => fc === action.payload);
      if (ind > -1) {
        stateFavoriteuserIds.splice(ind, 1);
      }
      return {
        ...state,
        favoriteUserIds: stateFavoriteuserIds
      };
    default:
      return state;
  }
}