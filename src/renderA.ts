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
