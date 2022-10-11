import "./style.css";

import { render } from "./renderA";
console.log("12323");

render();
if (import.meta.hot) {
  //  只要当前模块接受独立这个热替换， 他就不会同页面刷新去更新
  //  即使 import.mate.hot.accept() 这样也会自动热更新。

  // 只监听 ./renderA.ts 模块的热更新，而没有监听自己的更新，
  //  这时 renderA 更新了是没有触发的，若要触发热更新， 可以
  // 使用 第二个参数 触发， 如下。
  import.meta.hot.accept(["./renderA"], (newM) => {
    newM.render();
  });

  //  vite 模块热更新和 webpack 的不同。 webpack 是通过模块代理的方式来 触发模块热更新的。
  //  而  vite 的做法是那个模块更新就去执行对应的模块热更新逻辑。
  //  这导致一些问题。 如 由于更新模块老的 定时器等 side effect没有被清除。
  // 在热更新的过程中， 老的模块是没有被清除的
  // vite 提供了 dispose 方法清除副作用。

  // 上面的代码只监听了renderA 的hmr,  main 使用 hmr
  import.meta.hot.accept(() => {});

  //  而要使某个模块 更新了强制刷新页面用。
  // import.meta.hot.decline( )
  // accept 的优先级比 decline的要高。 当 一个模块同时有
  //  accept 和 decline 时， 只有 accept 生效。
  //  而 import.meta.hot.invalidate() 是 比 accept 更高的。
}
