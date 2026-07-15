//reate a middleware that counts total number of requests sent to a
//  server. Also create an endpoint that exposes it

const express = require("express");

const app = express();

let request=0;

function requestInc(req,res){
    request++;
    console.log(`Total req are ${request}`)
    req.request=request;
}

//app.use(middleware);

app.get("/sum", function(req, res) {
    requestInc();
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    requestInc();
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    requestInc();
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    requestInc();
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);