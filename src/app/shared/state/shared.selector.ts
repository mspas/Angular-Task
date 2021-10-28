import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

const getSharedState = createFeatureSelector<SharedState>('shared');

export const getIsLoadingSelector = createSelector(getSharedState, (state) => {
    return state.isLoading;
})

export const getErrorMessageSelector = createSelector(getSharedState, (state) => {
    return state.errorMessage;
})