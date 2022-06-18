require("dotenv").config();
const express = require("express");
const path = require("path");
const {engine:expressHandlebars}= require("express-handlebars");
const mdw = require("./middlewares/middleware");
const routeTest = require("./routes/testRoute");



const app = express();

//mdw
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));



//engine
app.engine("hbs",expressHandlebars({
    extname: ".hbs",
    defaultLayout:"layout",
    layoutsDir: path.join(__dirname,"/views/layouts/"),
    partialsDir: path.join(__dirname,"/views/partials/"),
}));

//settings
app.set("port", process.env.PORT || 8080);
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "hbs");



app.use("/api/test",routeTest);
app.get("/",(_req, res)=>{ res.render("pages/home");});


app.use(mdw.rutaNoImplmentada);


const server = app.listen(app.get("port"), ()=> console.log(`App escuchando en puerto ${app.get("port")}`));

server.on("error", error=> console.error(error.message));