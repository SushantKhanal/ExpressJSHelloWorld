const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

app.get('/api/members', (req, res) => res.json(members));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
