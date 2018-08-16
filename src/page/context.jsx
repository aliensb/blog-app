import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import moment from "moment";
class Home extends Component {
  render() {
    const newArticleList = this.props.list.map(item => {
      return (
        <div className="card postcard" key={item.get("cid")}>
          <div className="card postcard">
            <div className="card-body">
              <h3 className="postcard-title">
                <Link to={"/details/" + item.get("cid")}>
                  {item.get("title")}
                </Link>
              </h3>
              <div className="postcard-body">
                <div className="excerpt">
                  <p>
                    递归（recursion）是数学中处理问题的一种常用方法，在计算机科学中指的是一种通过重复将问题分解为同类的子问题而解决问题的方法。
                  </p>
                  <p>
                    换句话说，在处理分治问题上采用递归是一种很简单的方法，其强大描述能力，可以把无限过程表达在有限语句中。
                  </p>
                </div>
                <div className="read-more">
                  <Link to={"/details/" + item.get("cid")}>
                    <i className="czs-hand-button" />查看全文
                  </Link>
                </div>
              </div>
              <footer className="postcard-footer">
                <span>z正小歪</span>
                <span className="bull">·</span>
                <span>
                  {moment.unix(item.get("created")).format("YYYY-MM-DD HH:mm")}
                </span>
              </footer>
            </div>
          </div>
        </div>
      );
    });
    return <div>{newArticleList}</div>;
  }
}
const mapState = state => {
  return {
    list: state.getIn(["home", "list"])
  };
};

export default connect(
  mapState,
  null
)(Home);
