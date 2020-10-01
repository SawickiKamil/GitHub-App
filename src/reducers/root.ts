import { combineReducers, Store } from "redux";

export default combineReducers<Store>({
  example: (state: Store = {}) => state,
});
