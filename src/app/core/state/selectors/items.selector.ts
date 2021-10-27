import { ItemsState } from "../items.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getItemsState = createFeatureSelector<ItemsState>('items');

export const getItems = createSelector(getItemsState, (state) => {
    return state.items;
})