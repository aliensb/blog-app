import * as ActionTypes from "../constant/actionTypes";
import axios from "axios";
import { SITE_URL, PAGE_LIMIT } from "../constant/constant";
export const getChangeHomeListAction = (list, page, total, pageSize) => {
  return {
    type: ActionTypes.CHANGE_HOME_LIST,
    list,
    page,
    total,
    pageSize
  };
};

export const getChangeDetailDataAction = data => {
  return {
    type: ActionTypes.CHANGE_DETAIL_DATA,
    data
  };
};

export const getInitHomeListDataAction = pageNo => {
  return dispatch => {
    axios
      .get(SITE_URL + "rest/page/" + pageNo + "?limit=" + PAGE_LIMIT)
      .then(res => {
        const list = res.data.list;
        const page = res.data.pageNum;
        const total = res.data.total;
        const pageSize = res.data.size;
        dispatch(getChangeHomeListAction(list, page, total, pageSize));
      });
  };
};

export const getInitDetailsDataAction = cid => {
  return dispatch => {
    axios.get(SITE_URL + "rest/detail/" + cid).then(res => {
      const data = res.data;

      dispatch(getChangeDetailDataAction(data));
    });
  };
};
