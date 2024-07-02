// MENJALANAKAN SERVER
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/home', (c) => {
  return c.text('Hello Rifky!')
})

// const port = 3000
// console.log(`Server is running on port ${port}`)

// serve({
//   fetch: app.fetch,
//   port
// })

// AKSES NODE JS API
// import {serve, type HttpBindings} from '@hono/node-server'
// import { Hono } from 'hono'

// type Bindings = HttpBindings & {

// }

// const app = new Hono<{Bindings: Bindings}>()

// app.get('/', (c) => {
//   return c.json({
//     remoteAddress: c.env.incoming.socket.remoteAddress,
//   })
// })

// serve(app)

// MENJALANKAN STATIC  FILE DARI LOCAL SYSTEM
// import { serve } from '@hono/node-server'
// import { serveStatic } from '@hono/node-server/serve-static'
// import { Hono } from 'hono'

// const app = new Hono()

// app.use('/static/*', serveStatic({
//   root: './',
//   rewriteRequestPath: (path) => {
//     const newPath = path.replace(/^\/static/, 'static')
//     console.log(`Rewrite path: ${path} -> ${newPath}`)
//     return newPath
//   }
// }))


// serve(app)

// Node Http2 Server
// Uncrypted
// import { serve } from "@hono/node-server";
// import { Hono } from "hono";
// import { createServer } from "node:http2";

// const app = new Hono();

// app.get("/", (c) => {
//   return c.text("Hello, HTTP/2!");
// });

// const server = serve({
//   fetch: app.fetch,
//   createServer,
// });

// console.log("Server is running on port 3000");

// // Start the server on port 3000
// server.listen(3000);

//Route
const app1 = new Hono();
// app1.get('/user/:name?', (c) => c.text('Rifky!'))

// serve(app1)

//Chained Route
// app1
//   .get('/endpoint', (c) => {
//     return c.text('GET /endpoint')
//   })
//   .post((c) => {
//     return c.text('POST /endpoint')
//   })
//   .delete((c) => {
//     return c.text('DELETE /endpoint')
//   })

//   serve(app1)

//Group Route
// const buku = new Hono()

// buku.get('/', (c) => c.text('List Books'))
// buku.get('/:id', (c) => {
//   const id = c.req.param('id')
//   return c.text(" Dapatakan Buku : " + id)
// })
// buku.post('/', (c) => c.text('Buat Buku'))

// app1.route('/buku', buku)
// serve(app1)

//Routing with Hostname
// const web = new Hono({
//   getPath: (req) => req.url.replace(/^https?:\/([^?]+).*$/, '$1'),
// });

// web.get('/www.rifky.com/home', (c) => c.text('Hallo Dunia'))
// web.get('www.rifky2.com/home', (c) => c.text('Shuttt, Ini Web Rahasia'))

// serve(web)






