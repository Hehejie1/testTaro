import { Component } from "react";
import { getSystemInfo } from "@tarojs/taro";
import "./app.less";

class App extends Component {
  componentDidMount() {
    console.log(getSystemInfo());
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
