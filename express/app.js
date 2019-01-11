const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const controllers = require('./controllers');

const controllerKeys = Object.keys(controllers);
for(let i = 0; i < controllerKeys.length; i++){
    const controller = controllers[controllerKeys[i]];
    app[controller.method](controller.route, controller.requestHandler);
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))