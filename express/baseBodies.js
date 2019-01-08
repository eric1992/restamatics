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
        link('/api/Reals/Integers/Fibonacci', 'child'),
        link('/api/Reals/Integers/Factorial', 'child'),
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

exports.fibonacci = {
    name: 'Fibonacci',
    links: [
        link('/api/Reals/Integers/Fibonacci', 'self'),
    ],
}

exports.factorial = {
    name: 'Factorial',
    links: [
        link('/api/Reals/Integers/Factorial', 'self'),
    ],
}
