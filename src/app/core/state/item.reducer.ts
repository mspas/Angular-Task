import { Action, createReducer, on } from '@ngrx/store';
import * as itemActions from './item.action';
import { Item } from '../models/item.model';
import { defaultState, ItemsState } from './items.state';


const _itemReducer = createReducer(
    defaultState,
    on(itemActions.addItemSuccess, (state, action) => {
        let item = {...action.item};
        return {
            ...state,
            items: [...state.items, item]
        }
    }),
    on(itemActions.editItemSuccess, (state, action) => {
        let newItemsArray: Item[] = [];
        state.items.forEach(item => {
            let temp = item.id === action.item.id ? action.item : item;
            newItemsArray.push(temp);
        });
        return {
            ...state,
            items: newItemsArray
        }
    }),
    on(itemActions.deleteItemSuccess, (state, action) => {
        const index = state.items.indexOf(action.item);
        let newItemsArray = Object.assign([], state.items);

        if (index > -1)
            newItemsArray.splice(index, 1);

        return {
            ...state,
            items: newItemsArray
        }
    }),
    on(itemActions.getItemsSuccess, (state, action) => {
        return {
            ...state,
            items: action.items
        }
    })

)

export function itemReducer(state: ItemsState | undefined, action: Action) {
    return _itemReducer(state, action);
};