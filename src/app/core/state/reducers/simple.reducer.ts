import { Action } from "@ngrx/store";

export function simpleReducer(state: string = 'Hello World', action: Action) {
    switch (action.type) {
        case 'SPANISH':
            return state = "Hola";
        case 'FRENCH':
            return state = "Oui";
        default:
            return state;
    }
}