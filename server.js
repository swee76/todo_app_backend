import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import json from 'koa-json'
import mongoose from 'mongoose'

//inbuilt modules
import { readdirSync } from 'fs'
import path from 'path'

const app = new Koa();

//DB connection
mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log("Error" + err);
})

//Middlewares
app.use(bodyparser());
app.use(json());

//Routes
readdirSync('./routes').map((singleFile) => {
    const importName = path.parse(singleFile).name;
    const route = `./routes/${importName}`
    app.use(require(route).routes())
    app.use(require(route).allowedMethods())
});


//Bootstrap the server
app.listen(8000, () => {
    console.log("App is started: " + 8000);
})