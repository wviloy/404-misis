const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к базе данных SQLite
const db = new sqlite3.Database(':memory:'); // Используем базу данных в памяти для примера

// Создание таблиц
db.serialize(() => {
    db.run("CREATE TABLE sessions (id INTEGER PRIMARY KEY, date TEXT, psychologist TEXT, reason TEXT, report TEXT)");
});

app.use(bodyParser.json());
app.use(cors());

// Получение сессий
app.get('/sessions', (req, res) => {
    db.all("SELECT * FROM sessions", (err, rows) => {
        if (err) {
            return res.status(500).send('Error retrieving sessions');
        }
        res.json(rows);
    });
});

// Добавление сессии
app.post('/sessions', (req, res) => {
    const { date, psychologist, reason, report } = req.body;
    db.run("INSERT INTO sessions (date, psychologist, reason, report) VALUES (?, ?, ?, ?)", [date, psychologist, reason, report], function(err) {
        if (err) {
            return res.status(500).send('Error adding session');
        }
        res.send('Session added');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
