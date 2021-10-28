import { Action, createReducer, on } from '@ngrx/store';
import * as sharedActions from './shared.action';
import { defaultState, SharedState } from "./shared.state";

const _sharedReducer = createReducer(
    defaultState,
    on(sharedActions.loadingStart, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(sharedActions.loadingStop, (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    }),
    on(sharedActions.setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMessage
        }
    })
);

export function sharedReducer(state: SharedState | undefined, action: Action) {
    return _sharedReducer(state, action);
};