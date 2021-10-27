import { Action, createReducer, on } from '@ngrx/store';
import * as itemActions from '../actions/item.action';
import { Item } from '../../models/item.model';
import { defaultState, ItemsState } from '../items.state';


const newState = (state: Item[], newData: Item[]) => {
    return Object.assign({}, state, newData);
}

const _itemReducer = createReducer(
    defaultState,
    on(itemActions.addItem, (state, action) => {
        let item = {...action.item};
        item.id = state.items.length + 1;
        return {
            ...state,
            items: [...state.items, item]
        }
    }),
    on(itemActions.editItem, (state, action) => {
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
    on(itemActions.deleteItem, (state, action) => {
        const index = state.items.indexOf(action.item);
        let newItemsArray = Object.assign([], state.items);

        if (index > -1)
            newItemsArray.splice(index, 1);

        return {
            ...state,
            items: newItemsArray
        }
    })
)

export function itemReducer(state: ItemsState | undefined, action: Action) {
    return _itemReducer(state, action);
};