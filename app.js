const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Connect to SQLite database
let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("Error opening database", err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create a table and insert a sample record (run only if the table doesn't exist)
        db.run(`CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY, message TEXT)`, (err) => {
            if (err) {
                console.error("Error creating table", err.message);
            } else {
                db.run(`INSERT INTO data(message) VALUES ('Hello from SQLite')`);
            }
        });
    }
});

// Define an endpoint to fetch data from the SQLite database
app.get('/data', (req, res) => {
    db.get('SELECT * FROM data WHERE id = 1', [], (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": row.message
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
