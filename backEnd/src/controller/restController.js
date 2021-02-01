const Express = require('express')
const Cors = require("cors");

const app = Express()
const port = 8080;

app.use(Express.json())
app.use(Cors())

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

app.get('/test', async (req, res) => {
    res.status(200)
    res.json({"name": "amir", "family": "abbasi"})
})


