const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/save", (req, res) => {
    const { message } = req.body;

    // Save the message to a file
    fs.appendFile("messages.txt", message + "\n", (err) => {
        if (err) {
            console.error("Error saving message:", err);
            res.status(500).json({ error: "Error saving message" });
        } else {
            console.log("Message saved:", message);
            res.json({ message: "Message saved successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
