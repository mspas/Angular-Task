import { ItemsState } from "./core/state/items.state";
import { itemReducer } from './core/state/item.reducer';
import { sharedReducer } from "./shared/state/shared.reducer";
import { SharedState } from "./shared/state/shared.state";

export interface AppState {
    items: ItemsState;
    shared: SharedState
  }
  

export const appReducer = {
  items: itemReducer,
  shared: sharedReducer
}