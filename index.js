let port = 3080

const express = require("express")
const { engine } = require("express-handlebars")

const app = express()

app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})


app.listen(port, () => {
    console.log("app is listening on port ", port
    )
})