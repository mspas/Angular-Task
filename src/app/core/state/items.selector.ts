import { ItemsState } from "./items.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

const getItemsState = createFeatureSelector<ItemsState>('items');

export const getItemsSelector = createSelector(getItemsState, (state) => {
    return state.items;
})