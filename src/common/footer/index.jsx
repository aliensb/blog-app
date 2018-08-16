import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container fixed-690 footer">
        <div>
          <span>
            Power by <a href="https://hexo.io">Hexo</a>
          </span>
        </div>
        <div>
          <span>
            Theme
            <a href="https://github.com/zhengxiaowai/hexo-theme-lessless">
              lessless
            </a>
          </span>
        </div>
        <div>
          <span id="hexiangyutest_container_site_pv">
            PV: <span id="busuanzi_value_site_pv" />
          </span>
          <span id="busuanzi_container_site_uv">
            UV: <span id="busuanzi_value_site_uv" />
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
