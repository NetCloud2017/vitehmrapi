export function render() {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div> 
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;
}

let timer,
  index = 0;
timer = setInterval(() => {
  console.log(index++);
}, 1000);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (timer) clearInterval(timer);
  });
}

// 用于 缓存模块状态。
//  两种写法
// import.meta.hot?.data.index
// import.meta.hot.data.cache = {
//   //  当模块更新时， index 的值还保留。
// getIndex () {
//     return index
// }
// };
