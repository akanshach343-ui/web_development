const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
const port = 3000;

const JWT_SECRET= "randomclouds"

const users = [];

app.use(express.json());

app.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //check for length, check same pass and user arent stored twice


    function generateTokens() {
        let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        let token = "";
        for (let i = 0; i < 32; i++) {
            // use a simple function here
            token += options[Math.floor(Math.random() * options.length)];
        }
        console.log(token);
        return token;
    }

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are already signedup! "
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in"
    })
})

//understand map and filter 
/*app.post("/signin", function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const founduser = users.find(function (u) {
        if (u.username == username && u.password == password) {
            return true;
        } else {
            return false
        }
    })

    if (founduser) {
        const token = generateToken();

        res.json({
            message: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

})*/

//jwt logic
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

//authenticated end pt to verify who are you and give user info
/*app.get("/me", function(req, res){
    const token=req.headers.token;
    //now find the user using token
    let founduser =null;

    for(let i=0; i<users.length; i++){
        if(users[i].token== token){
            founduser = users[i]
        }
    }

    if(founduser){
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    }else{
        res.json({
            message: "token invalid"
        })
    }
})*/

//ADDING JWT: step 1 run in terminal npm install jsonwebtoken
//so create jwt_Secret key

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})


app.listen(port, () => {
    console.log("Server is running on port 3000");
})