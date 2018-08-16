import React, { Component } from "react";

import Home from "./context";
import * as ActionCreator from "../store/actionCreator";

import { connect } from "react-redux";
import { Pagination } from "antd";
class HomePage extends Component {
  componentDidMount() {
    this.props.getHomeData(this.props.page);
  }
  render() {
    return (
      <section className="container mainbody fixed-690">
        <div className="postcards">
          <Home />
        </div>
        <div className="paging">
          <Pagination
            defaultPageSize={this.props.pageSize}
            total={this.props.total}
            onChange={pageNo => this.props.getHomeData(pageNo)}
          />
        </div>
      </section>
    );
  }
}

const mapState = state => {
  return {
    page: state.getIn(["home", "page"]),
    total: state.getIn(["home", "total"]),
    pageSize: state.getIn(["home", "pageSize"])
  };
};
const mapDispatch = dispatch => ({
  getHomeData(page) {
    dispatch(ActionCreator.getInitHomeListDataAction(page));
  }
});

export default connect(
  mapState,
  mapDispatch
)(HomePage);
