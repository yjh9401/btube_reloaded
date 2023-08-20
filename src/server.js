import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const app=express();
const port=80;
const logger=morgan("combined");

console.log('process.cwd() ::: %s', process.cwd());
app.set('views', process.cwd()+'/src/views');
app.set('view engine', 'pug');
app.use(logger);
app.use(express.urlencoded({extended:true})) // post로 넘어가는 것을 body에서 search 가능

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})