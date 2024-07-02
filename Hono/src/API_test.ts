import { Hono } from "hono";
import {serve} from '@hono/node-server'
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

const users = [
    {id : 101, 'name' : 'Rify'},
    {id : 102, 'name' : 'Arifin'},
    {id : 103, 'name' : 'Kyle'}
];

app.get('/api/users', (c) => {
    return c.json(users)
});

serve({
    fetch : app.fetch,
    port : 3000
})

console.log('server berjalan di port 3000')

