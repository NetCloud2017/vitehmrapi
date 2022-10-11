import "./style.css";

import { render } from "./renderA";

render();
if (import.meta.hot) {
  //  只要当前模块接受独立这个热替换， 他就不会同页面刷新去更新
  //  即使 import.mate.hot.accept() 这样也会自动热更新。

  // 只监听 ./renderA.ts 模块的热更新，若要其他模块也触发热更新， 可以
  // 使用 第二个参数 触发。
  import.meta.hot.accept(["./renderA.ts"], (newM) => {
    newM.render();
  });

  //  vite 模块热更新和 webpack 的不同。 webpack 是通过模块代理的方式来 触发模块热更新的。
  //  而  vite 的做法是那个模块更新就去执行对应的模块热更新逻辑。
  //  这导致一些问题。 如 由于更新模块老的 定时器等 side effect没有被清除。
  // 在热更新的过程中， 老的模块是没有被清除的。
}
