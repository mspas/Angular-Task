import { Injectable } from "@angular/core";
import { mergeMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addItem, addItemSuccess, getItems, getItemsSuccess, editItemSuccess, editItem, deleteItem, deleteItemSuccess } from "../actions/item.action";
import { ApiSercive } from "../../services/api.service";

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private _api: ApiSercive) {}

    getItems$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(getItems), 
                mergeMap((action) => {
                    return this._api.getItems().pipe(
                        map((items) => {
                            return getItemsSuccess({ items });
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
                    return this._api.addItem(action.item).pipe(
                        map((response) => {
                            return addItemSuccess({item: response.item});
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
                    return this._api.editItem(action.item).pipe(
                        map((response) => {
                            return editItemSuccess({item: action.item});
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
                    return this._api.deleteItem(action.item.id).pipe(
                        map((response) => {
                            return deleteItemSuccess({item: action.item});
                        })
                    );
                })
            );
        }
    )
}