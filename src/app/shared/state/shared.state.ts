
export interface SharedState {
    isLoading: boolean,
    errorMessage: string,
  }
  
  export const defaultState: SharedState = {
    isLoading: false,
    errorMessage: ""
  }