import { Item } from "./item.model";

export interface BasicApiResponse {
    success: boolean;
    message: string;
}

export interface AddItemResponse extends BasicApiResponse {
    item: Item;
}