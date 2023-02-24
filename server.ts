import express from "express";
import routes from "./server/routers";


const app = express();
app.use(express.json())

app.listen(9000, () => {
    console.log('Server listening on port:9000');
    routes(app);
});