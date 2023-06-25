import express from "express"
import morgan from "morgan"
const app=express()
const port=3000
const logger=morgan("combined")

const home=(req, res) => {
    console.log(`home`)
    res.send('handle home')
}
app.use(logger)
app.get('/', home)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})