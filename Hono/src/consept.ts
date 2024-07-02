import { Hono } from "hono";
import {serve} from "@hono/node-server"

const app = new Hono();

app.use(async (c, next) => {
    const start = Date.now()
    await next()
    const end = Date.now()
    c.res.headers.set('X-Response-Time', `${end - start}`)
})

app.get('/', (c) => {
    return c.text('Hello, world!');
  });
  
  serve({
    fetch: app.fetch,
    port: 3000,
  });
  
  console.log('Server is running on port 3000');