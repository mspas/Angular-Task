import { createAction, props } from "@ngrx/store";
import { Item } from "../../models/item.model";


export const GET_ITEMS = '[Item] Get Items';
export const GET_ITEMS_SUCCESS = '[Item] Get Items Success';

export const ADD_ITEM = '[Item] Add Item';
export const ADD_ITEM_SUCCESS = '[Item] Add Item Success';

export const EDIT_ITEM = '[Item] Edit Item';
export const EDIT_ITEM_SUCCESS = '[Item] Edit Item Success';
export const EDIT_ITEM_FAILURE = '[Item] Edit Item Failure';

export const DELETE_ITEM = '[Item] Delete Item';
export const DELETE_ITEM_SUCCESS = '[Item] Delete Item Success';
export const DELETE_ITEM_FAILURE = '[Item] Delete Item Failure';



export const getItems = createAction(GET_ITEMS);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, props<{items: Item[]}>());

export const addItem = createAction(ADD_ITEM, props<{item: Item}>());
export const addItemSuccess = createAction(ADD_ITEM_SUCCESS, props<{item: Item}>());

export const editItem = createAction(EDIT_ITEM, props<{item: Item}>());
export const editItemSuccess = createAction(EDIT_ITEM_SUCCESS, props<{item: Item}>());
export const editItemFailure = createAction(EDIT_ITEM_FAILURE, props<{item: Item}>());

export const deleteItem = createAction(DELETE_ITEM, props<{item: Item}>());
export const deleteItemSuccess = createAction(DELETE_ITEM_SUCCESS, props<{item: Item}>());
export const deleteItemFailure = createAction(DELETE_ITEM_FAILURE, props<{item: Item}>());