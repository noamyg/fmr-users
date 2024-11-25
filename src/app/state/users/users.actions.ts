/* eslint-disable @typescript-eslint/no-shadow */
import { Action } from '@ngrx/store';
import { Order, User } from 'src/app/users/model/user.model';

export enum EUsersActions {
  GetUsers = '[Users] Get Users',
  GetUsersSuccess = '[Users] Get Users Success',
  GetUsersFailure = '[Users] Get Users Failure',
  AddUser = '[Users] Add User',
  AddUserSuccess = '[Users] Add User Success',
  AddUserFailure = '[Users] Add User Failure',
  SetSelectedUser = '[Users] Set Selected User',
  UpdateUser = '[Users] Update User',
  UpdateUserSuccess = '[Users] Update User Success',
  UpdateUserFailure = '[Users] Update User Failure',
  DeleteUser = '[Users] Delete User',
  DeleteUserSuccess = '[Users] Delete User Success',
  DeleteUserFailure = '[Users] Delete User Failure',
  AddToFavorites = '[Users] Add To Favorites',
  AddToFavoritesSuccess = '[Users] Add To Favorites Success',
  RemoveFromFavorites = '[Users] Remove From Favorites',
  RemoveFromFavoritesSuccess = '[Users] Remove From Favorites Success',
}

export class GetUsers implements Action {
  public readonly type = EUsersActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUsersActions.GetUsersSuccess;
  constructor(public payload: User[]) {}
}

export class GetUsersFailure implements Action {
  public readonly type = EUsersActions.GetUsersFailure;
  constructor(public payload: string) {}
}

export class AddUser implements Action {
  public readonly type = EUsersActions.AddUser;
  constructor(public payload: User) {}
}

export class AddUserSuccess implements Action {
  public readonly type = EUsersActions.AddUserSuccess;
  constructor(public payload: User) {}
}

export class AddUserFailure implements Action {
  public readonly type = EUsersActions.AddUserFailure;
  constructor(public payload: string) {}
}

export class SetSelectedUser implements Action {
  public readonly type = EUsersActions.SetSelectedUser;
  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  public readonly type = EUsersActions.UpdateUser;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  public readonly type = EUsersActions.UpdateUserSuccess;
  constructor(public payload: User) {}
}

export class UpdateUserFailure implements Action {
  public readonly type = EUsersActions.UpdateUserFailure;
  constructor(public payload: string) {}
}

export class DeleteUser implements Action {
  public readonly type = EUsersActions.DeleteUser;
  constructor(public payload: number) {}
}

export class DeleteUserSuccess implements Action {
  public readonly type = EUsersActions.DeleteUserSuccess;
  constructor(public payload: number) {}
}

export class DeleteUserFailure implements Action {
  public readonly type = EUsersActions.DeleteUserFailure;
  constructor(public payload: string) {}
}

export class AddToFavorites implements Action {
  public readonly type = EUsersActions.AddToFavorites;
  constructor(public payload: number) {}
}

export class AddToFavoritesSuccess implements Action {
  public readonly type = EUsersActions.AddToFavoritesSuccess;
  constructor(public payload: number) {}
}

export class RemoveFromFavorites implements Action {
  public readonly type = EUsersActions.RemoveFromFavorites;
  constructor(public payload: number) {}
}

export class RemoveFromFavoritesSuccess implements Action {
  public readonly type = EUsersActions.RemoveFromFavoritesSuccess;
  constructor(public payload: number) {}
}

export type UsersActions =
    GetUsers | GetUsersSuccess | GetUsersFailure |
    AddUser | AddUserSuccess |
    SetSelectedUser |
    UpdateUserSuccess | UpdateUserSuccess |
    DeleteUserSuccess | DeleteUserSuccess |
    AddToFavorites | AddToFavoritesSuccess |
    RemoveFromFavorites | RemoveFromFavoritesSuccess;
