import { fromJS } from "immutable";
import * as ActionTypes from "../../constant/actionTypes";
const defaultState = fromJS({
  data: {}
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DETAIL_DATA: {
      return state.set("data", action.data);
    }
    default:
      return state;
  }
};
