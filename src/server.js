import "./db.js";
import express from "express"
import morgan from "morgan"

const app=express()
const port=3000
const logger=morgan("combined")

const home=(req, res) => {
    console.log(`home`)
    res.send('handle home')
}

app.set('views', process.cwd()+'/src/views');
app.set('view engine','pug');
app.use(logger);
app.use(express.urlencoded({extended : true}));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});