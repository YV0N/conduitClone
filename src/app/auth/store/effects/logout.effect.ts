import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logoutAction } from '../actions/sync.action';
import { tap } from 'rxjs/operators';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { Router } from '@angular/router';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistenceServices.set('accessToken', '');
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private persistenceServices: PersistanceService,
    private router: Router
  ) {}
}
