import { MainNavActionTypes, SET_CLASSNAME } from "./types";

export function setClassName(className: string): MainNavActionTypes {
  return {
    type: SET_CLASSNAME,
    payload: className,
  }
}