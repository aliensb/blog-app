import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import * as ActionCreator from "../store/actionCreator";

class DetailBody extends Component {
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
  render() {
    return (
      <div className="post">
        <div className="post-title">
          <h1>{this.props.data.title}</h1>
          <div className="post-title-views">
            <span id="busuanzi_container_page_pv" style={{ display: "inline" }}>
              本文总阅读量
              <span id="busuanzi_value_page_pv">{this.props.data.hits}</span> 次
            </span>
          </div>
        </div>
        <div className="post-content markdown">
          <ReactMarkdown source={this.props.data.content} rawSourcePos={true} />
        </div>
        <div className="post-foot">
          <div id="disqus_thread" />
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    data: state.getIn(["details", "data"])
  };
};

const mapDispatch = dispatch => {
  return {
    getDetailData(cid) {
      dispatch(ActionCreator.getInitDetailsDataAction(cid));
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(withRouter(DetailBody));
