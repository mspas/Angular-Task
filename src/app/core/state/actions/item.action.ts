import { createAction, props } from "@ngrx/store";
import { Item } from "../../models/item.model";

export const GET_ITEMS = '[Item] Get Items';
export const ADD_ITEM = '[Item] Add Item';
export const EDIT_ITEM = '[Item] Edit Item';
export const DELETE_ITEM = '[Item] Delete Item';

export const getItems = createAction(GET_ITEMS);
export const addItem = createAction(ADD_ITEM, props<{item: Item}>());
export const editItem = createAction(EDIT_ITEM, props<{item: Item}>());
export const deleteItem = createAction(DELETE_ITEM, props<{item: Item}>());