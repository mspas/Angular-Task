import { Injectable } from "@angular/core";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addItem, addItemSuccess, getItems, getItemsSuccess, editItemSuccess, editItem, deleteItem, deleteItemSuccess, deleteItemFailure } from "./item.action";
import { ApiSercive } from "../services/api.service";
import { loadingStart, loadingStop, setErrorMessage } from "src/app/shared/state/shared.action";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { of } from "rxjs";

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private _api: ApiSercive, private _store: Store<AppState>) {}

    getItems$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(getItems), 
                mergeMap((action) => {
                    this._store.dispatch(loadingStart());
                    return this._api.getItems().pipe(
                        map((items) => {
                            this._store.dispatch(loadingStop());
                            this._store.dispatch(setErrorMessage({errorMessage: ""}));
                            return getItemsSuccess({ items });
                        }),
                        catchError((error: any) =>{
                            this._store.dispatch(loadingStop());
                            return of(setErrorMessage({errorMessage: error.error}));
                        })
                    );
                })
            );
        }
    )
    
    addItem$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(addItem), 
                mergeMap((action) => {
                    this._store.dispatch(loadingStart());
                    return this._api.addItem(action.item).pipe(
                        map((response) => {
                            this._store.dispatch(loadingStop());
                            this._store.dispatch(setErrorMessage({errorMessage: ""}));
                            return addItemSuccess({item: response.item});
                        }),
                        catchError((error: any) =>{
                            this._store.dispatch(loadingStop());
                            return of(setErrorMessage({errorMessage: error.error}));
                        })
                    );
                })
            );
        }
    )

    editItem$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(editItem), 
                mergeMap((action) => {
                    this._store.dispatch(loadingStart());
                    return this._api.editItem(action.item).pipe(
                        map((response) => {
                            this._store.dispatch(loadingStop());
                            this._store.dispatch(setErrorMessage({errorMessage: ""}));
                            return editItemSuccess({item: action.item});
                        }),
                        catchError((error: any) =>{
                            this._store.dispatch(loadingStop());
                            return of(setErrorMessage({errorMessage: error.error}));
                        })
                    );
                })
            );
        }
    )

    deleteItem$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(deleteItem), 
                mergeMap((action) => {
                    this._store.dispatch(loadingStart());
                    return this._api.deleteItem(action.item.id).pipe(
                        map((response) => {
                            this._store.dispatch(loadingStop());
                            this._store.dispatch(setErrorMessage({errorMessage: ""}));
                            return deleteItemSuccess({item: action.item});
                        }),
                        catchError((error: any) =>{
                            this._store.dispatch(loadingStop());
                            return of(setErrorMessage({errorMessage: error.error}));
                        })
                    );
                })
            );
        }
    )
}