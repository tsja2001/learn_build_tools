const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();

const userRouter = new Router({
  prefix: "/user",
});

userRouter.get("/list", (ctx, next) => {
  ctx.body = [1, 2, 3, 4, 5];
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen("8001", () => {
  console.log("8001启动服务");
});
