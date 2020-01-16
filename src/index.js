import koa from 'koa';
import { port, url } from "./utils/config";

const app = new koa();

app.use(async ctx => {
    ctx.body = 'Hello, world'
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
