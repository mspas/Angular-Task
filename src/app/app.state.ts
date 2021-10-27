import { ItemsState } from "./core/state/items.state";
import { itemReducer } from './core/state/reducers/item.reducer';
import { simpleReducer } from "./core/state/reducers/simple.reducer";

export interface AppState {
    items: ItemsState;
    message: string
  }
  

export const appReducer = {
  items: itemReducer,
  message: simpleReducer
}