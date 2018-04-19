const express = require('express');

const app = express();

const router = require('./blogPosts');

app.use(express.static('public'));
//routing requests to express router instances that were imported above
app.use('/user-list', router);


app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
