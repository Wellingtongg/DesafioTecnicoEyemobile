export const SET_CLASSNAME = 'SET_CLASSNAME';

export interface IMainNavState {
  className: string;
}

interface setClassName {
  type: typeof SET_CLASSNAME
  payload: string;
}

export type MainNavActionTypes = setClassName;