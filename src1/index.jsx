import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

if(module.hot) {
  // 当 App 组件或者它依赖的模块更新时，重新引入更新后的模块并重新渲染
  // module.hot.accept("./App", () => {
  //   console.log('module.hot.accept');
  //   ReactDOM.render(
  //       <App />,
  //       rootEl
  //   );
  // });

}
console.log('index module', module);

