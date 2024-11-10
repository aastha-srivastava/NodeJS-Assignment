const fs = require('fs');
const path = require('path');

// Ensure files exist
const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');

// Check if input.txt exists
fs.access(inputPath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('Error: input.txt file does not exist');
        return;
    }

    // Copy data from input.txt to output.txt using streams
    const readStream = fs.createReadStream(inputPath, 'utf8');
    const writeStream = fs.createWriteStream(outputPath);

    readStream.on('error', (err) => {
        console.error('Error reading input file:', err);
    });

    writeStream.on('error', (err) => {
        console.error('Error writing to output file:', err);
    });

    readStream.pipe(writeStream);

    // Display content of output.txt line by line
    writeStream.on('finish', () => {
        fs.readFile(outputPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading output file:', err);
                return;
            }
            const lines = data.split('\n');
            lines.forEach(line => {
                console.log(line);
            });
        });
    });
});
