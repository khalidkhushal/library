const express = require(`express`);
const bodyparser = require(`body-parser`);

const path = require(`path`);


const router = require(`./server/routes/router`)
require(`dotenv`).config();



const PORT = process.env.PORT;
const app = express();

require(`./server/database/connection`);

// const model_builder = require(`./Model_builder`)();


app.set(`view engine`, `ejs`);
app.use(express.static(`public`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(`/`, router);
//app.use(`images`, express.static(path.resolve(__dirname, `images`)))




app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})