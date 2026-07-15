const express = require("express");

const app = express();

app.use(express.json());
app.use(cors()); //allows cross orign requests from all domains/frontends
// app.use(cors({
//     domain: "https:localhost:3000"
// })) restricts to this domain

app.post("/sum", function(req, res) {
    console.log(req.body)
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});



app.listen(3000);