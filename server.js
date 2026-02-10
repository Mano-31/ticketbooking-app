const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

let db;

async function connectDB() {
    await client.connect();
    db = client.db("ticketBooking");
    console.log("MongoDB Connected");
}
connectDB();


app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const exists = await db.collection("users").findOne({ username });

    if (exists) {
        return res.send(`
            <div style="
                font-family: Arial;
                background: #d9c6c6;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
            ">
                <div style="
                    background:white;
                    padding:30px;
                    border-radius:12px;
                    box-shadow:0 0 15px rgba(0,0,0,0.2);
                    text-align:center;
                    width:320px;
                ">
                    <h3 style="color:red;margin-bottom:20px;">
                        ❌ User already exists
                    </h3>

                    <a href="/register.html" style="
                        text-decoration:none;
                        background:#007bff;
                        color:white;
                        padding:10px 18px;
                        border-radius:6px;
                        font-size:14px;
                        display:inline-block;
                    ">
                        Go Back
                    </a>
                </div>
            </div>
        `);
    }

    await db.collection("users").insertOne({ username, password });

    res.send(`
        <body style="font-family:Arial;text-align:center;background:#d9c6c6;padding-top:50px;">
        <div style="background:white;padding:20px;border-radius:10px;width:300px;margin:auto;box-shadow:0 0 10px #ccc;">
        <h3>✅ Registration successful</h3>
        <a href="/login.html" style="color:#007bff;">Login Now</a>
        </div>
        </body>
    `);
});


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await db.collection("users").findOne({
        username,
        password
    });

    if (user) {
        res.redirect("/booking.html");
    } else {
        res.send(`
            <body style="font-family:Arial;text-align:center;background:#d9c6c6;padding-top:50px;">
            <div style="background:white;padding:20px;border-radius:10px;width:300px;margin:auto;box-shadow:0 0 10px #ccc;">
            <h3>❌ Invalid login</h3>
            <a href="/login.html" style="color:#007bff;">Login Now</a>
            </div>
            </body>
        `);
    }
});


app.post("/book", async (req, res) => {
    const { name, phoneNo, email, from, to, date, seat, ticketsCount, seatNo } = req.body;

    await db.collection("tickets").insertOne({
        name, phoneNo, email, from, to, date, seat, ticketsCount, seatNo
    });

    res.send(`
        <body style="font-family:Arial;text-align:center;background:#d9c6c6;padding-top:50px;">
        <div style="background:white;padding:20px;border-radius:10px;width:320px;margin:auto;box-shadow:0 0 10px #ccc;">
        <h3>🎉 Ticket Booked Successfully</h3>

        Name: ${name}<br>
        Phone: ${phoneNo}<br>
        Email: ${email}<br>
        From: ${from}<br>
        To: ${to}<br>
        Date: ${date}<br>
        Seat: ${seat}<br>
        Tickets: ${ticketsCount}<br>
        Seat No: ${seatNo}<br><br>

        <a href="/booking.html" style="color:#007bff;">Book Again</a>
        <h2>Enjoy Your Journey</h2>
        </div>
        </body>
    `);
});


app.listen(PORT, () => {
    console.log(` Server running at http://localhost:5000/register.html`);
});
