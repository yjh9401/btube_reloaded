import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/btube"
    /*,    {
        useNewUrlParser: true, // <-- no longer necessary
        useUnifiedTopology: true // <-- no longer necessary
    }*/
);

const db = mongoose.connection;

const handleOpen=() => console.log("Connect to DB");
const handleError=() => console.log("DB Error ", error);

db.on("error", handleError);
db.on("open", handleOpen);


