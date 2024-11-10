const fs = require('fs');

const countries = [
    {
        name: 'Country1',
        population: '10 million',
        gdp: '500 billion',
        yearOfIndependence: 1960,
        growthRate: '2%'
    },
    {
        name: 'Country2',
        population: '20 million',
        gdp: '1 trillion',
        yearOfIndependence: 1970,
        growthRate: '3%'
    },
    {
        name: 'Country3',
        population: '30 million',
        gdp: '1.5 trillion',
        yearOfIndependence: 1980,
        growthRate: '4%'
    },
    {
        name: 'Country4',
        population: '40 million',
        gdp: '2 trillion',
        yearOfIndependence: 1990,
        growthRate: '5%'
    },
    {
        name: 'Country5',
        population: '50 million',
        gdp: '2.5 trillion',
        yearOfIndependence: 2000,
        growthRate: '6%'
    }
];

const data = countries.map(country => 
    `${country.name}, ${country.population}, ${country.gdp}, ${country.yearOfIndependence}, ${country.growthRate}`
).join('\n');

// Write data to file
fs.writeFile('Countries.txt', data, (err) => {
    if (err) {
        console.error('Error writing to file', err);
        return;
    }
    console.log('Data written to file successfully');

    // Read data from file
    fs.readFile('Countries.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            return;
        }
        const lines = data.split('\n');
        lines.forEach(line => {
            console.log(line);
        });
    });
});
