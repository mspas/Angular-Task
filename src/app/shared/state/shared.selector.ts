import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

const getIsLoading = createFeatureSelector<SharedState>('shared');

export const getIsLoadingSelector = createSelector(getIsLoading, (state) => {
    return state.isLoading;
})