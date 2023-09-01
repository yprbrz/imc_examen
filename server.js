let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

let router = require('./routes');
app.use('/', router);

app.listen(80, function() {
    console.log("Running on port 80");
});