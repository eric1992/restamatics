const baseBodies = require('./baseBodies');
const enumerators = require('./enumerators');
const errors = require('./errors');
const paramsFromQueryGenerator = require('./paramFromQueryGenerator');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const get = {
    reals: (req, res) => {
        res.send(JSON.stringify({...baseBodies.reals}));
    },
    integers: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minGreaterThanOrEqualToMax));
        } else {
            const responseObject = {
                ...baseBodies.integers,
                values: enumerators.integers(params) 
            }
            res.send(JSON.stringify(responseObject));
        }
    },
    evens: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minLessThanMax));
        } else {
            const responseObject = {
                ...baseBodies.evens,
                values: enumerators.evens(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    },
    odds: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minLessThanMax));
        } else {
            const responseObject = {
                ...baseBodies.odds,
                values: enumerators.odds(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    },
    fibonacci: (req, res) => {
        const params = paramsFromQueryGenerator.fibonacci(req.query);
        if(params.count <= 0){
            res.status(400);
            res.send(JSON.stringify(errors.negativeCount))
        } else {
            const responseObject = {
                ...baseBodies.fibonacci,
                values: enumerators.fibonacci(params),
            };
            res.send(JSON.stringify(responseObject));
        }
    },
    factorial: (req, res) => {
        const params = paramsFromQueryGenerator.factorial(req.query)
        if(params.count <= 0){
            res.status(400);
            res.send(JSON.stringify(errors.negativeCount))
        } else if (params.startIndex <= 0) {
            res.status(400);
            res.send(JSON.stringify(errors.negativeStartIndex));
        } else {
            const responseObject = {
                ...baseBodies.factorial,
                values: enumerators.factorial(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/Reals', get.reals)

app.get('/api/Reals/Integers', get.integers)

app.get('/api/Reals/Integers/Evens', get.evens);

app.get('/api/Reals/Integers/Odds', get.odds);

app.get('/api/Reals/Integers/Fibonacci', get.fibonacci);

app.get('/api/Reals/Integers/Factorial', get.factorial);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))