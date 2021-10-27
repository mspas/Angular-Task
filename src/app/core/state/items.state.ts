import { Item } from "../models/item.model";

export interface ItemsState {
  items: Item[];
}

export const defaultState: ItemsState = {
  items: [
    { id: -1, name: "Sample Item 1 APP", quantity: 1}, 
    { id: -2, name: "Sample Item 2 APP", quantity: 2}
  ]
}
