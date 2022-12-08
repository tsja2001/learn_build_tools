const el = document.createElement("button");
el.textContent = "点我懒加载";

el.addEventListener("click", () => {
  import(
    /* webpackChunkName: "ts" */
    /* webpackPrefetch: true */
    "./main.ts"
  ).then((res) => {
    console.log("懒加载回掉函数", {...res});
  });
});

document.body.append(el);
