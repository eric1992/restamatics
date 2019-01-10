const link = (href, rel) => ({ href: href, rel: rel});

exports.reals = {
    name: 'Reals',
    links: [
        link('/api/Reals', 'self'),
        link('/api/Reals/Integers', 'child'),
    ],
};

exports.integers = {
    name: 'Integers',
    links: [
        link('/api/Reals/Integers', 'self'),
        link('/api/Reals/Integers/Evens', 'child'),
        link('/api/Reals/Integers/Odds', 'child'),
        link('/api/Reals/Integers/Primes', 'child'),
    ],
};

exports.evens = {
    name: 'Evens',
    links: [
        link('/api/Reals/Integers/Evens', 'self'),
    ]
};

exports.odds = {
    name: 'Odds',
    links: [
        link('/api/Reals/Integers/Odds', 'self'),
    ]
};

exports.primes = {
    name: 'Primes',
    links: [
        link('/api/Reals/Integers/Primes', 'self')
    ]
}

exports.functions = {
    name: 'Functions',
    links: [
        link('/api/Functions', 'self'),
        link('/api/Functions/Fibonacci', 'child'),
        link('/api/Functions/Factorial', 'child'),
    ]
}

exports.fibonacci = {
    name: 'Fibonacci',
    links: [
        link('/api/Functions/Fibonacci', 'self'),
    ],
}

exports.factorial = {
    name: 'Factorial',
    links: [
        link('/api/Functions/Factorial', 'self'),
    ],
}
