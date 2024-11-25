import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { concatMap, delay, map, catchError, switchMap, tap } from 'rxjs/operators';
import { of, withLatestFrom } from 'rxjs';
import * as fromUsers from './users.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app/app.state';
import { selectFavoriteUserIds } from './users.selector';
import { LocalStorageKeys } from '@fmr-users/libs/utils';
import { cloneDeep } from 'lodash';
import { UsersAndOrdersApiService } from 'src/app/services/users-and-orders-api.service';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.GetUsers>(fromUsers.EUsersActions.GetUsers),
    concatMap(() => of('dummy loader').pipe(delay(2000))),
    switchMap(() => this.usersAndOrdersApiService.getUsers().pipe(
      map(data => new fromUsers.GetUsersSuccess(data)),
      catchError(error => of(new fromUsers.GetUsersFailure(error?.message ?? 'error'))),
    ))
  ));

  updateUser$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.UpdateUser>(fromUsers.EUsersActions.UpdateUser),
    map(action => action.payload),
    concatMap(user => of(user).pipe( //In real life - there would be an api call here, returning the updated resource
      map(data => new fromUsers.UpdateUserSuccess(data)),
      catchError(error => of(new fromUsers.UpdateUserFailure(error?.message ?? 'error'))),
    ))
  ));

  addUser$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.AddUser>(fromUsers.EUsersActions.AddUser),
    map(action => action.payload),
    switchMap(user => of(user).pipe( //In real life - there would be an api call here, returning the id of the created resource
      map(data => new fromUsers.AddUserSuccess(data)),
      catchError(error => of(new fromUsers.AddUserFailure(error?.message ?? 'error'))),
    ))
  ));

  deleteUser$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.DeleteUser>(fromUsers.EUsersActions.DeleteUser),
    map(action => action.payload),
    switchMap(user => of(user).pipe( //In real life - there would be an api call here, returning "OK"
      map(data => new fromUsers.DeleteUserSuccess(data)),
      catchError(error => of(new fromUsers.DeleteUserFailure(error?.message ?? 'error'))),
    ))
  ));

  addToFavorites$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.AddToFavorites>(fromUsers.EUsersActions.AddToFavorites),
    map(action => action.payload),
    switchMap(userId => of(userId).pipe(
      withLatestFrom(
        this.store.pipe(
          select(selectFavoriteUserIds)
        )
      ),
      tap(([userId, favoriteUserIds]) => {
        const updatedFavorites = [ ...cloneDeep(favoriteUserIds) || [], userId ];
        localStorage.setItem(LocalStorageKeys.FAVORITE_USERS, updatedFavorites.join(','));
        return userId;
      }),
      map(([userId]) => new fromUsers.AddToFavoritesSuccess(userId))
    ))
  ));

  removeFromFavorites$ = createEffect(() => this.actions.pipe(
    ofType<fromUsers.RemoveFromFavorites>(fromUsers.EUsersActions.RemoveFromFavorites),
    map(action => action.payload),
    switchMap(userId => of(userId).pipe(
      withLatestFrom(
        this.store.pipe(
          select(selectFavoriteUserIds)
        )
      ),
      tap(([userId, favoriteUserIds]) => {
        const ind = favoriteUserIds?.findIndex(id => id === userId) ?? -1;
        const updatedFavorites = cloneDeep(favoriteUserIds || []);
        if (ind !== -1) {
          updatedFavorites.splice(ind, 1);
        }
        localStorage.setItem(LocalStorageKeys.FAVORITE_USERS, updatedFavorites.join(','));
      }),
      map(([userId]) => new fromUsers.RemoveFromFavoritesSuccess(userId))
    ))
  ));

  constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private usersAndOrdersApiService: UsersAndOrdersApiService
  ) {}
}