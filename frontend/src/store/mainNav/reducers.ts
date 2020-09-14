import { IMainNavState, MainNavActionTypes, SET_CLASSNAME } from "./types";

const initialState: IMainNavState = {
  className: '',
}

export function mainNavReducer(state = initialState, action: MainNavActionTypes): IMainNavState {
  switch (action.type) {
    case SET_CLASSNAME:
      return {
        className: action.payload,
      }
    default:
      return state;
  }
}
