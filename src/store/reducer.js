import { reducer as HomeReducer } from "../page/store";
import { reducer as DetailReducer } from "../details/store";
import { combineReducers } from "redux-immutable";
const reducer = combineReducers({
  home: HomeReducer,
  details: DetailReducer
});
export default reducer;
