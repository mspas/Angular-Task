import { createAction, props } from "@ngrx/store";

export const LOADING_START = '[Shared] Loading Start';
export const LOADING_STOP = '[Shared] Loading Stop';

export const SET_ERROR_MESSAGE = '[Shared] Set Error Message';

export const loadingStart = createAction(LOADING_START);
export const loadingStop = createAction(LOADING_STOP);
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ errorMessage: string}>());