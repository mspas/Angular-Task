import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddItemResponse, BasicApiResponse } from "../models/api-response.model";
import { Item } from "../models/item.model";

@Injectable({
    providedIn: 'root'
})
export class ApiSercive {
    apiURL: string = "/api";

    constructor(private _http: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this._http.get<Item[]>(`${this.apiURL}/item`);
    }

    addItem(item: Item) {
        return this._http.post<AddItemResponse>(`${this.apiURL}/item`, { item });
    }

    editItem(item: Item) {
        return this._http.put<BasicApiResponse>(`${this.apiURL}/item`, { item });
    }
    
    deleteItem(itemId: number) {
        return this._http.delete<BasicApiResponse>(`${this.apiURL}/item/${itemId}`);
    }
}