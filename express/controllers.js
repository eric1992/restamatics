const enumerators = require('./enumerators');
const errors = require('./errors');
const paramsFromQueryGenerator = require('./paramFromQueryGenerator');

const link = (href, rel) => ({ href: href, rel: rel});

exports.getReals = {
    route: '/api/Reals',
    method: 'get',
    baseBody: {
        name: 'Reals',
        links: [
            link('/api/Reals', 'self'),
            link('/api/Reals/Integers', 'child'),
        ],
    },
    requestHandler: (req, res) => {
        res.send(JSON.stringify(this.getReals.baseBody));
    }
}

exports.getIntegers = {
    route: '/api/Reals/Integers',
    method: 'get',
    baseBody: {
        name: 'Integers',
        links: [
            link('/api/Reals/Integers', 'self'),
            link('/api/Reals/Integers/Evens', 'child'),
            link('/api/Reals/Integers/Odds', 'child'),
            link('/api/Reals/Integers/Primes', 'child'),
        ]
    },
    requestHandler: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minGreaterThanOrEqualToMax));
        } else if (params.max - params.min > 10000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanTenThousand))
        } 
        else {
            const responseObject = {
                ...this.getIntegers.baseBody,
                values: enumerators.integers(params) 
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}

exports.getEvens = {
    route: '/api/Reals/Integers/Evens',
    method: 'get',
    baseBody: {
        name: 'Evens',
        links: [
            link('/api/Reals/Integers/Evens', 'self'),
        ]
    },
    requestHandler: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minLessThanMax));
        } else if (params.max - params.min > 10000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanTenThousand))
        } else {
            const responseObject = {
                ...this.getEvens.baseBody,
                values: enumerators.evens(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}

exports.getOdds = {
    route: '/api/Reals/Integers/Odds',
    method: 'get',
    baseBody: {
        name: 'Odds',
        links: [
            link('/api/Reals/Integers/Odds', 'self'),
        ]
    },
    requestHandler: (req, res) => {
        const params = paramsFromQueryGenerator.minMax(req.query);
        if(params.min >= params.max){
            res.status(400);
            res.send(JSON.stringify(errors.minLessThanMax));
        } else if (params.max - params.min > 10000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanTenThousand))
        } else {
            const responseObject = {
                ...this.getOdds.baseBody,
                values: enumerators.odds(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}

exports.getPrimes = {
    route: '/api/Reals/Integers/Primes',
    method: 'get',
    baseBody: {
        name: 'Primes',
        links: [
            link('/api/Reals/Integers/Primes', 'self')
        ]
    },
    requestHandler: (req, res) => {
        const parsedCount = parseInt(req.query.count, 10) || 10;
        if(req.query.count && (parsedCount != req.query.count || parsedCount < 0)){
            res.status(400);
            res.send(JSON.stringify(errors.negativeCount));
        } else if (parsedCount > 1000000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanOneMillion));
        } else {
            const responseObject = {
                ...this.getPrimes.baseBody,
                values: enumerators.primes({count: parsedCount}),
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}

exports.getFunctions = {
    route: '/api/Functions',
    method: 'get',
    baseBody: {
        name: 'Functions',
        links: [
            link('/api/Functions', 'self'),
            link('/api/Functions/Fibonacci', 'child'),
            link('/api/Functions/Factorial', 'child'),
        ]
    },
    requestHandler: (req, res) => {
        res.send(JSON.stringify(this.getFunctions.baseBody));
    }
}

exports.getFibonacci = {
    route: '/api/Functions/Fibonacci',
    method: 'get',
    baseBody: {
        name: 'Fibonacci',
        links: [
            link('/api/Functions/Fibonacci', 'self'),
        ]
    },
    requestHandler: (req, res) => {
        const params = paramsFromQueryGenerator.fibonacci(req.query);
        if(params.count <= 0){
            res.status(400);
            res.send(JSON.stringify(errors.negativeCount))
        } else if (params.count > 10000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanTenThousand))
        } else {
            const responseObject = {
                ...this.getFibonacci.baseBody,
                values: enumerators.fibonacci(params),
            };
            res.send(JSON.stringify(responseObject));
        }
    }
}

exports.getFactorial = {
    route: '/api/Functions/Factorial',
    method: 'get',
    baseBody: {
        name: 'Factorial',
        links: [
            link('/api/Functions/Factorial', 'self'),
        ],
    },
    requestHandler: (req, res) => {
        const params = paramsFromQueryGenerator.factorial(req.query)
        if(params.count <= 0){
            res.status(400);
            res.send(JSON.stringify(errors.negativeCount))
        } else if (params.count > 10000){
            res.status(400);
            res.send(JSON.stringify(errors.requestedMoreThanTenThousand))
        } else if (params.startIndex <= 0) {
            res.status(400);
            res.send(JSON.stringify(errors.negativeStartIndex));
        } else {
            const responseObject = {
                ...this.getFactorial.baseBody,
                values: enumerators.factorial(params),
            }
            res.send(JSON.stringify(responseObject));
        }
    }
}