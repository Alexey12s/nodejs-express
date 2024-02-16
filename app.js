// app.js
const express = require('express');
const app = express();
const port = 3000;

// Устанавливаем EJS в качестве шаблонизатора
app.set('view engine', 'ejs');
app.set('views', './views');

// Импортируем и используем маршруты
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

