import { Item } from "../models/item.model";

export interface ItemsState {
  items: Item[];
}

export const defaultState: ItemsState = {
  items: [
    { id: -1, name: "Sample Item 1", quantity: 1}, 
    { id: -2, name: "Sample Item 2", quantity: 2}
  ]
}
