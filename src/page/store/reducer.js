import { fromJS } from "immutable";
import * as ActionTypes from "../../constant/actionTypes";
const defaultState = fromJS({
  list: [],
  page: 1,
  total: 1,
  pageSize: 2
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_HOME_LIST: {
      const newState = state.merge({
        list: action.list,
        page: action.page,
        total: action.total,
        pageSize: action.pageSize
      });
      return newState;
    }
    default:
      return state;
  }
};
